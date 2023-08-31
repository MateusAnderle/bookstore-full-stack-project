import { Image } from "react-native";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import CongratulationImage from "../../../assets/congratulations.png";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

export function CheckoutSuccess() {
  const { navigate } = useNavigation<any>();
  const { setProducts, setTotalCartCheckout } = useContext(CartContext);

  async function clearInputs() {
    setProducts([]);
    setTotalCartCheckout({});
  }

  useEffect(() => {
    clearInputs();
  }, []);

  return (
    <S.Container>
      <Header />
      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        <S.Content>
          <Image
            source={CongratulationImage}
            style={{
              width: "100%",
              height: 80,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          <S.Title>Your purchase was successful!</S.Title>
          <S.Description>We hope you visit us again!</S.Description>

          <S.LoginButton onPress={() => navigate("Home")}>
            <S.LoginButtonText>Return to the homepage</S.LoginButtonText>
          </S.LoginButton>
        </S.Content>

        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
