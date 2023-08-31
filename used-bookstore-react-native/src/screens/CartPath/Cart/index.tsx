import * as S from "./styles";
import { BackButton } from "../../../components/BackButton";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../utils/api";
import { Alert } from "react-native";
import { currencyBRL } from "../../../utils/currencyFormatter";

export function Cart() {
  const [itemsCart, setItemsCart] = useState<number>();
  const [totalCart, setTotalCart] = useState<number>();
  const { navigate } = useNavigation<any>();
  const { token, signOut } = useAuth();
  const { products, addQuantity, subQuantity, setTotalCartCheckout } =
    useContext(CartContext);

  async function isTokenValid() {
    if (token !== null) {
      try {
        await api.get(`/auth/token`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          signOut();
        }, 1500);
      }
    }
  }

  function goToCheckout() {
    if (!token) {
      return Alert.alert("To continue, you need to be logged in");
    }
    setTotalCartCheckout({
      numberOfItems: itemsCart,
      totalPriceCart: totalCart,
    });

    navigate("Checkout");
  }

  useEffect(() => {
    function itemsQuantity() {
      const initialValue = 0;
      const numberOfItems = products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantidade,
        initialValue
      );
      setItemsCart(numberOfItems);
    }

    itemsQuantity();
  }, [products]);

  useEffect(() => {
    function totalPrice() {
      const initialValue = 0;
      const priceOfItems = products.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.preco * currentValue.quantidade,
        initialValue
      );
      setTotalCart(priceOfItems);
    }
    totalPrice();
  }, [products]);

  useEffect(() => {
    isTokenValid();
  }, []);

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
          <S.PageTitle>Cart</S.PageTitle>
        </S.HeaderTitle>

        <S.Content>
          {products?.map((item) => {
            return (
              <S.CartLineBox key={item.id}>
                <S.BookImage source={{ uri: item.image }} />
                <S.DescriptionBox>
                  <S.Title>
                    <S.B>Title:</S.B> {item.livro}
                  </S.Title>
                  <S.Author>
                    <S.B>Author:</S.B> {item.autor}
                  </S.Author>
                  <S.Price>
                    <S.B>Price:</S.B>
                    {currencyBRL(item.preco)}
                  </S.Price>
                  <S.QuantDesc>Quantity: {item.quantidade}</S.QuantDesc>

                  <S.Quantity>
                    <TouchableOpacity onPress={() => subQuantity(item.id)}>
                      <Ionicons
                        name="remove-circle-outline"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>

                    <S.QuantityTitle>Change quantity</S.QuantityTitle>

                    <TouchableOpacity onPress={() => addQuantity(item.id)}>
                      <Ionicons
                        name="add-circle-outline"
                        size={30}
                        color="black"
                      />
                    </TouchableOpacity>
                  </S.Quantity>
                </S.DescriptionBox>
              </S.CartLineBox>
            );
          })}
          {products.length === 0 ? (
            <S.CartTotalBox>
              <S.B>Empty cart...</S.B>
              <S.EmptyMessage>Continue browsing our app!</S.EmptyMessage>
            </S.CartTotalBox>
          ) : (
            <S.CartTotalBox>
              <S.QuantityTotal>
                <S.TotalTitle>Total amount:</S.TotalTitle>
                <S.TotalSubtitle>{itemsCart}</S.TotalSubtitle>
              </S.QuantityTotal>

              <S.PriceTotal>
                <S.TotalTitle>Purchase amount:</S.TotalTitle>
                <S.TotalSubtitle>{currencyBRL(totalCart!)}</S.TotalSubtitle>
              </S.PriceTotal>

              <S.DescriptionTotal>
              You can pay with a credit card with no interest
              </S.DescriptionTotal>

              <S.CartTotalButton onPress={goToCheckout}>
                <S.CartTotalButtonText>Complete Purchase</S.CartTotalButtonText>
              </S.CartTotalButton>
            </S.CartTotalBox>
          )}
        </S.Content>

        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
