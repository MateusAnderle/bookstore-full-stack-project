import { useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Alert } from "react-native";
import "react-native-get-random-values";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { currencyBRL } from "../../utils/currencyFormatter";

export function ProductDetail() {
  const { navigate } = useNavigation<any>();
  const route = useRoute<any>();
  const { product } = route.params;
  const { addProductCart, products: cartProducts } = useContext(CartContext);

  async function handleAddToCart() {
    const findEqual = cartProducts.find((item) => item.id === product.id);
    if (findEqual) {
      Alert.alert("Produto já existente no carrinho!");
      return;
    }
    product.quantidade = 1;
    addProductCart(product);
    navigate("Cart");
  }

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.ScrollList>
        <S.Content>
          <S.ProductBox>
            <S.BookImage source={{ uri: product.image }} />
            <S.BookTitle>{product.livro}</S.BookTitle>
            <S.BookAuthor>{product.autor}</S.BookAuthor>
            <S.Price>{currencyBRL(product.preco)}</S.Price>
            <S.SuggestedPrice>
              Preço sugerido na editora: {currencyBRL(product.precoSugerido)}
            </S.SuggestedPrice>

            <S.BuyButton onPress={handleAddToCart}>
              <S.TextBuyButton>COMPRAR</S.TextBuyButton>
            </S.BuyButton>
            <S.PaymentConditions>
              Em 1x no cartão de crédito sem juros
            </S.PaymentConditions>
            <S.BuyDescription>
              Este porduto é vendido e entregue por Sebus
            </S.BuyDescription>
          </S.ProductBox>

          <S.ProductBox>
            <S.SynopsisTitle>Sinopse</S.SynopsisTitle>
            <S.Synopsis>{product.sinopse}</S.Synopsis>
          </S.ProductBox>

          <S.ProductBox>
            <S.ProductDatasheetTitle>Ficha técnica</S.ProductDatasheetTitle>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Livro</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.livro}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Autor</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.autor}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Gênero</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.genero}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Quantidade</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>
                  {product.quantidade}
                </S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Publicação</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.ano}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Idioma</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.idioma}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Código de barras</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>{product.isbn}</S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Fabricante</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>
                  {product.fabricante}
                </S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>

            <S.DataSheetLine>
              <S.DataKey>
                <S.DataTextTitle>Dimensões do produto</S.DataTextTitle>
              </S.DataKey>

              <S.DataValue>
                <S.DataTextDescription>
                  {product.dimensoes}
                </S.DataTextDescription>
              </S.DataValue>
            </S.DataSheetLine>
          </S.ProductBox>
        </S.Content>

        <Footer />
      </S.ScrollList>
    </S.Container>
  );
}
