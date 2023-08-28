import { Header } from "../../components/Header";
import * as S from "./styles";
import { BackButton } from "../../components/BackButton";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { api } from "../../utils/api";
import { Footer } from "../../components/Footer";
import { ActivityIndicator, FlatList, ListRenderItem } from "react-native";
import { useEffect, useState, useRef } from "react";
import Pagination from "../../components/Pagination/pagination";
import { BookObjectProps } from "../Home";
import { currencyBRL } from "../../utils/currencyFormatter";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    search: string;
  };
}

interface DataProps {
  pages: number;
  filteredBooks: BookObjectProps[];
  totalFilteredBooks: number;
}

export function SearchList() {
  const { navigate } = useNavigation<any>();
  const route = useRoute<RouteProps>();
  const { search } = route.params;
  const flatListRef = useRef<FlatList>(null);
  const [data, setData] = useState<DataProps | null>();
  const [isLoading, seIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  async function fetchSearch() {
    try {
      const response = await api.get(
        `/products/search/${search}?skip=${skip}&take=${take}`
      );
      setData(response?.data);
    } catch (error) {
      console.log(error);
      setData(null);
    } finally {
      seIsLoading(false);
    }
  }

  const renderItem: ListRenderItem<BookObjectProps> = ({ item }) => {
    return (
      <S.BookBox onPress={() => navigate("ProductDetail", { product: item })}>
        <S.BookImage source={{ uri: item.image }} />
        <S.BookTitle>{item.livro}</S.BookTitle>
        <S.BookAuthor>{item.autor}</S.BookAuthor>
        <S.BookPrice>{currencyBRL(item.preco)}</S.BookPrice>
      </S.BookBox>
    );
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  async function previousClick() {
    if (page === 1) return;

    setSkip(skip - take);
    setPage(page - 1);
    scrollToTop();
  }

  async function nextClick() {
    if (page === data?.pages) return;

    setSkip(skip + take);
    setPage(page + 1);
    scrollToTop();
  }

  useEffect(() => {
    fetchSearch();
  }, [search]);

  useEffect(() => {
    fetchSearch();
  }, [skip]);

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.Content>
        <S.Title>Exibindo resultados para "{search}"</S.Title>

        {isLoading ? (
          <ActivityIndicator
            color="#F00"
            size="large"
            style={{ marginTop: 100, marginBottom: 100 }}
          />
        ) : (
          <FlatList
            ref={flatListRef}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
            }}
            data={data?.filteredBooks}
            horizontal={false}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <>
                {data!?.pages >= 2 && (
                  <Pagination
                    pageNumber={page}
                    previousClick={previousClick}
                    nextClick={nextClick}
                  />
                )}
                <Footer />
              </>
            }
            ListEmptyComponent={
              <S.EmptyList>
                Tente novamente ou procure em outra página
              </S.EmptyList>
            }
            numColumns={2}
            renderItem={renderItem}
          />
        )}
      </S.Content>
    </S.Container>
  );
}
