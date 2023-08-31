import { BackButton } from "../../../components/BackButton";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Alert } from "react-native";
import { api, zipCodeApi } from "../../../utils/api";
import { ReactNode } from "react";
import { useAuth } from "../../../hooks/auth";
import { currencyBRL } from "../../../utils/currencyFormatter";

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

export function Checkout() {
  const types = ["Credit card", "Bank slip", "Bank Transfer"];
  const [finalDelivery, setFinalDelivery] = useState({} as FinalDeliveryProps);
  const [fetchZipCode, setFetchZipCode] = useState({} as FetchZipCodeProps);
  const [zip, setZip] = useState("");
  const [number, setNumber] = useState<string>();
  const [referencePoint, setReferencePoint] = useState<string>();
  const [active, setActive] = useState(types[0]);
  const { navigate } = useNavigation<any>();
  const { products, totalCartCheckout } = useContext(CartContext);
  const { userData } = useAuth();
  const frete = 15;
  const totalCheckout = totalCartCheckout.totalPriceCart
    ? totalCartCheckout.totalPriceCart + frete
    : frete;

  async function fetchApiZipCode() {
    if (zip.length < 8 || zip.length > 8) {
      return;
    }
    try {
      const response = await zipCodeApi.get(`/${zip}/json/`);
      setFetchZipCode(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function zipCodePrepare() {
    if (!fetchZipCode) {
      return Alert.alert("Please fill in the above information");
    }

    const { logradouro, bairro, localidade, uf } = fetchZipCode;

    setFinalDelivery({
      logradouro,
      bairro,
      localidade,
      uf,
      referencePoint: referencePoint,
      number: number,
      valorFrete: 15,
      prazo: 10,
      payment: active,
    });
  }

  async function sendToApi() {
    if (!finalDelivery.logradouro) {
      Alert.alert("Please confirm the data first");
      return;
    }

    try {
      await api.post(`/order/${userData}`, {
        products,
        orderSummary: totalCartCheckout,
        delivery: finalDelivery,
      });

      navigate("CheckoutSuccess");
    } catch (error) {
      Alert.alert("Checkout error!");
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        <S.HeaderTitle>
          <Ionicons
            name="cart-outline"
            size={30}
            color="#000"
            style={{ marginRight: 10 }}
          />
          <S.PageTitle>Checkout</S.PageTitle>
        </S.HeaderTitle>

        <S.Content>
          <S.Title>Hello, visitor</S.Title>

          <S.FormTitle>Complete your delivery information</S.FormTitle>
          <S.Input
            placeholder="ZIP Code"
            onChangeText={setZip}
            onBlur={fetchApiZipCode}
            placeholderTextColor="#AAA"
            keyboardType="numeric"
          />
          <S.Input
            placeholder="Number"
            onChangeText={setNumber}
            placeholderTextColor="#AAA"
            keyboardType="numeric"
          />
          <S.Input
            placeholder="Landmark"
            onChangeText={setReferencePoint}
            placeholderTextColor="#AAA"
          />

          <S.PaymentTitle>Payment</S.PaymentTitle>

          <S.PaymentButtonWrapper>
            {types.map((type) => (
              <S.PaymentButton
                key={type}
                active={active === type}
                onPress={() => setActive(type)}
              >
                <S.PaymentButtonText>{type}</S.PaymentButtonText>
              </S.PaymentButton>
            ))}
          </S.PaymentButtonWrapper>

          <S.ConfirmForm onPress={zipCodePrepare}>
            <S.ConfirmButtonText>Confirm information</S.ConfirmButtonText>
          </S.ConfirmForm>
        </S.Content>

        <S.Content style={{ marginTop: 10 }}>
          <S.OrderTitle>Order summary</S.OrderTitle>

          <S.SubtitleOrder>Products</S.SubtitleOrder>
          <S.DescriptionOrder>
            Items amount: {totalCartCheckout.numberOfItems}
          </S.DescriptionOrder>
          <S.DescriptionOrder>
          Total value of products:{" "}
            {currencyBRL(totalCartCheckout?.totalPriceCart!)}
          </S.DescriptionOrder>

          {finalDelivery.logradouro && (
            <>
              <S.SubtitleOrder>Delivery</S.SubtitleOrder>
              <S.DescriptionOrder>
              Street address: {finalDelivery.logradouro}, {finalDelivery.number}
              </S.DescriptionOrder>
              <S.DescriptionOrder>
                Neighborhood: {finalDelivery.bairro} - {finalDelivery.localidade},{" "}
                {finalDelivery.uf}
              </S.DescriptionOrder>
              <S.DescriptionOrder>
                Landmark: {finalDelivery.referencePoint}
              </S.DescriptionOrder>
              <S.DescriptionOrder>
              Estimated delivery time: {finalDelivery.prazo} days
              </S.DescriptionOrder>
              <S.DescriptionOrder>
              Shipping cost: {currencyBRL(finalDelivery?.valorFrete)}
              </S.DescriptionOrder>

              <S.SubtitleOrder>Payment</S.SubtitleOrder>
              <S.DescriptionOrder>
                Payment method: Bank transfer
              </S.DescriptionOrder>

              <S.OrderTitle style={{ marginTop: 20 }}>
                Total order amount: {currencyBRL(totalCheckout)}
              </S.OrderTitle>
            </>
          )}

          <S.CheckouButton onPress={sendToApi}>
            <S.CheckouButtonText>Complete Purchase</S.CheckouButtonText>
          </S.CheckouButton>
        </S.Content>
        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
