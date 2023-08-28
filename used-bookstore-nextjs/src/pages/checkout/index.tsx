import { useRouter } from "next/router";
import { ReactNode, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import {
  CentralizeCheckoutContainer,
  CheckoutContainer,
  CheckoutReview,
  DeliveryCheckout,
  PaymentChechout,
  DeliveryAndPayment,
  ConfirmDeliveryPayment,
  ButtonToggle,
} from "../../styles/pages/checkout";
import { api, zipCodeApi } from "../../utils/api";
import { currencyBRL } from "../../utils/currencyFormatter";
import { useAuth } from "../../hooks/auth";

interface ReferenceValuesProps {
  target: {
    value: string;
  };
}

interface FinalDeliveryProps {
  logradouro: string;
  number: ReactNode;
  bairro: string;
  localidade: string;
  uf: string;
  referencePoint: ReactNode;
  prazo: number;
  valorFrete: number;
  payment: string;
}

interface FetchZipCodeProps {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function Checkout() {
  const router = useRouter();
  const types = ["Cartão de Crédito", "Boleto Bancário", "PIX (QR Code)"];
  const [finalDelivery, setFinalDelivery] = useState({} as FinalDeliveryProps);
  const [fetchZipCode, setFetchZipCode] = useState({} as FetchZipCodeProps);
  const [number, setNumber] = useState<ReferenceValuesProps>();
  const [referencePoint, setReferencePoint] = useState<ReferenceValuesProps>();
  const [active, setActive] = useState(types[0]);
  const { totalCartCheckout, products } = useContext(CartContext);
  const frete = 15;
  const totalCheckout = totalCartCheckout.totalPriceCart
    ? totalCartCheckout.totalPriceCart + frete
    : frete;
  const { userData } = useAuth();

  async function fetchApiZipCode(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const zipCodeFiltered = e.target.value;
      if (zipCodeFiltered.length < 8 || zipCodeFiltered.length > 8) {
        return;
      }
      const response = await zipCodeApi.get(`/${zipCodeFiltered}/json/`);
      setFetchZipCode(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function zipCodePrepare() {
    const { logradouro, bairro, localidade, uf } = fetchZipCode;

    setFinalDelivery({
      logradouro,
      bairro,
      localidade,
      uf,
      referencePoint: referencePoint?.target.value,
      number: number?.target.value,
      valorFrete: 15,
      prazo: 10,
      payment: active,
    });
  }

  const sendToApi = async () => {
    try {
      await api.post(`/order/${userData}`, {
        products,
        orderSummary: totalCartCheckout,
        delivery: finalDelivery,
      });

      router.push(`/checkoutFinalization`);
    } catch (error) {
      const notify = () => toast.error("Erro ao enviar o seu pedido!");
      notify();
      console.log(error);
    }
  };

  return (
    <CentralizeCheckoutContainer>
      <ToastContainer
        style={{ marginTop: "60px" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CheckoutContainer>
        <DeliveryAndPayment>
          <h3>Olá, Visitante!</h3>
          <DeliveryCheckout>
            <h4>Complete seus dados para entrega</h4>
            <input
              placeholder="Digite seu CEP"
              maxLength={8}
              onBlur={fetchApiZipCode}
            />
            <input
              type="number"
              placeholder="Digite o nº"
              onChange={setNumber}
            />
            <input
              type="text"
              placeholder="Cite algum ponto de referência"
              onChange={setReferencePoint}
            />
          </DeliveryCheckout>

          <PaymentChechout>
            <h4>Pagamento</h4>
            <div>
              {types.map((type) => (
                <ButtonToggle
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </ButtonToggle>
              ))}
            </div>
          </PaymentChechout>

          <ConfirmDeliveryPayment>
            <button onClick={zipCodePrepare}>Confirmar dados</button>
          </ConfirmDeliveryPayment>
        </DeliveryAndPayment>

        <CheckoutReview>
          <h3>Resumo do pedido</h3>

          <h4>Produtos</h4>
          <p>Quantidade de itens: {totalCartCheckout?.numberOfItems}</p>
          <p>
            Valor total do produtos:{" "}
            {currencyBRL(totalCartCheckout.totalPriceCart || 0)}
          </p>

          {finalDelivery.logradouro && (
            <>
              <h4>Entrega</h4>
              <p>
                Logradouro: {finalDelivery.logradouro}, {finalDelivery.number}
              </p>
              <p>
                Bairro: {finalDelivery.bairro} - {finalDelivery.localidade},{" "}
                {finalDelivery.uf}
              </p>

              <p>Referência: {finalDelivery.referencePoint}</p>

              <p>
                Prazo de entrega estimado: <b>{finalDelivery.prazo} dias</b>
              </p>
              <p>
                Valor do frete: <b>{currencyBRL(finalDelivery?.valorFrete)}</b>
              </p>

              <h4>Pagamento</h4>
              <p>
                Método de pagamento: <b>{finalDelivery.payment}</b>
              </p>
            </>
          )}

          {finalDelivery.logradouro && (
            <h2>Total do pedido: {currencyBRL(totalCheckout)}</h2>
          )}

          <button onClick={sendToApi}>Ir para o site de pagamento</button>
        </CheckoutReview>
      </CheckoutContainer>
    </CentralizeCheckoutContainer>
  );
}
