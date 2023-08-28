import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CentralizeCheckoutFinalization,
  CheckoutFinalizationContainer,
  CheckoutFinalizationContent,
} from "../../styles/pages/checkoutFinalization";

export default function CheckoutFinalization() {
  const { setProducts, setTotalCartCheckout } = useContext(CartContext);

  async function clearInputs() {
    setProducts([]);
    setTotalCartCheckout({});
  }

  useEffect(() => {
    clearInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CentralizeCheckoutFinalization>
      <CheckoutFinalizationContainer>
        <CheckoutFinalizationContent>
          <h2>Parabéns!</h2>
          <p>
            Sua compra foi concluída com sucesso! Esperamos que volte mais
            vezes!
          </p>
          <Link href="/">Voltar para a página inicial</Link>
        </CheckoutFinalizationContent>
      </CheckoutFinalizationContainer>
    </CentralizeCheckoutFinalization>
  );
}
