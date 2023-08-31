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
          <h2>Congratulations!</h2>
          <p>
          Your purchase has been successfully completed! We hope you come back again!
          </p>
          <Link href="/">Return to the homepage</Link>
        </CheckoutFinalizationContent>
      </CheckoutFinalizationContainer>
    </CentralizeCheckoutFinalization>
  );
}
