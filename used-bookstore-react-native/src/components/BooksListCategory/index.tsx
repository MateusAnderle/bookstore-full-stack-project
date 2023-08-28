import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { BookObjectProps } from "../../screens/Home";
import { ListRenderItem, FlatList } from "react-native";
import { currencyBRL } from "../../utils/currencyFormatter";

interface BooksListCategoryProps {
  title: string;
  category: BookObjectProps[];
}

export function BooksListCategory({ title, category }: BooksListCategoryProps) {
  const { navigate } = useNavigation<any>();

  const renderItem: ListRenderItem<BookObjectProps> = ({ item }) => (
    <S.BookBox
      key={item.id}
      onPress={() => navigate("ProductDetail", { product: item })}
    >
      <S.BookImage source={{ uri: item.image }} />
      <S.BookTitle>{item.livro}</S.BookTitle>
      <S.BookAuthor>{item.autor}</S.BookAuthor>
      <S.BookPrice>{currencyBRL(item.preco)}</S.BookPrice>
    </S.BookBox>
  );

  return (
    <>
      <S.Title>{title}</S.Title>

      <FlatList
        data={category}
        horizontal
        style={{ marginLeft: 20, marginBottom: 20 }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  );
}
