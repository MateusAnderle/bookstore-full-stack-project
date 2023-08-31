import { Header } from "../../components/Header";
import * as S from "./styles";
import { BackButton } from "../../components/BackButton";
import {
  useNavigation,
  useRoute,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";
import { api } from "../../utils/api";
import { Footer } from "../../components/Footer";
import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useRef, useState } from "react";
import { BookObjectProps } from "../Home";
import Pagination from "../../components/Pagination/pagination";
import { currencyBRL } from "../../utils/currencyFormatter";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    category: string;
  };
}

interface DataProps {
  pages: number;
  categories: BookObjectProps[];
  totalCategories: number;
}

export function Categories() {
  const { navigate } = useNavigation<any>();
  const route = useRoute<RouteProps>();
  const flatListRef = useRef<FlatList>(null);
  const { category } = route.params;
  const [data, setData] = useState<DataProps | null>();
  const [isLoading, seIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  async function fetchCategory() {
    try {
      const response = await api.get(
        `/products/filter/${category}?skip=${skip}&take=${take}`
      );
      setData(response?.data);
    } catch (error) {
      console.log(error);
      setData(null);
    } finally {
      seIsLoading(false);
    }
  }

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
    fetchCategory();
  }, [category]);

  useEffect(() => {
    fetchCategory();
  }, [skip]);

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.Content>
        <S.Title>{category}</S.Title>

        {isLoading ? (
          <ActivityIndicator
            color="#F00"
            size="large"
            style={{ marginTop: 100, marginBottom: 100 }}
          />
        ) : (
          <FlatList
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
            }}
            data={data?.categories}
            horizontal={false}
            keyExtractor={(item: BookObjectProps) => item.id}
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
                Please try again or search on another page
              </S.EmptyList>
            }
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <S.BookBox
                  onPress={() => navigate("ProductDetail", { product: item })}
                >
                  <S.BookImage source={{ uri: item.image }} />
                  <S.BookTitle>{item.livro}</S.BookTitle>
                  <S.BookAuthor>{item.autor}</S.BookAuthor>
                  <S.BookPrice>{currencyBRL(item.preco)}</S.BookPrice>
                </S.BookBox>
              );
            }}
          />
        )}
      </S.Content>
    </S.Container>
  );
}
