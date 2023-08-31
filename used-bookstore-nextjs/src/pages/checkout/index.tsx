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
  const types = ["Credit card", "Bank slip", "Bank transfer"];
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
      const notify = () => toast.error("Submitting order error!");
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
          <h3>Hello, visitor!</h3>
          <DeliveryCheckout>
            <h4>Complete your delivery information</h4>
            <input
              placeholder="Enter your ZIP code"
              maxLength={8}
              onBlur={fetchApiZipCode}
            />
            <input
              type="number"
              placeholder="Number"
              onChange={setNumber}
            />
            <input
              type="text"
              placeholder="Reference point"
              onChange={setReferencePoint}
            />
          </DeliveryCheckout>

          <PaymentChechout>
            <h4>Payment</h4>
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
            <button onClick={zipCodePrepare}>Confirm information</button>
          </ConfirmDeliveryPayment>
        </DeliveryAndPayment>

        <CheckoutReview>
          <h3>Order summary</h3>

          <h4>Products</h4>
          <p>Items quantity: {totalCartCheckout?.numberOfItems}</p>
          <p>
            Purchase amout:{" "}
            {currencyBRL(totalCartCheckout.totalPriceCart || 0)}
          </p>

          {finalDelivery.logradouro && (
            <>
              <h4>Delivery</h4>
              <p>
              Street address: {finalDelivery.logradouro}, {finalDelivery.number}
              </p>
              <p>
                Neighborhood: {finalDelivery.bairro} - {finalDelivery.localidade},{" "}
                {finalDelivery.uf}
              </p>

              <p>Reference point: {finalDelivery.referencePoint}</p>

              <p>
              Estimated delivery time: <b>{finalDelivery.prazo} days</b>
              </p>
              <p>
              Shipping cost: <b>{currencyBRL(finalDelivery?.valorFrete)}</b>
              </p>

              <h4>Payment</h4>
              <p>
                Payment method: <b>{finalDelivery.payment}</b>
              </p>
            </>
          )}

          {finalDelivery.logradouro && (
            <h2>Total order amount: {currencyBRL(totalCheckout)}</h2>
          )}

          <button onClick={sendToApi}>Go to the payment website</button>
        </CheckoutReview>
      </CheckoutContainer>
    </CentralizeCheckoutContainer>
  );
}
