import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import * as S from "./styles";
import Banner from "../../assets/capa.png";
import { Footer } from "../../components/Footer";
import { BooksListCategory } from "../../components/BooksListCategory";
import { api } from "../../utils/api";
import { ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";

export interface BookObjectProps {
  ano: number;
  autor: string;
  created_at: string;
  dimensoes: string;
  fabricante: string;
  genero: string;
  id: string;
  idioma: string;
  image: string;
  isbn: string;
  livro: string;
  preco: number;
  precoSugerido: number;
  quantidade: number;
  sinopse: string;
}

export function Home() {
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  const bestSellerCategory = "Mais vendidos";
  const newReleaseCategory = "Lançamentos";

  const { isLoading: isLoadingBest, data: bestSeller } = useQuery({
    queryKey: ["books-home-best", page],
    queryFn: async () =>
      await api.get(
        `/products/filter/${bestSellerCategory}?skip=${skip}&take=${take}`
      ),
    keepPreviousData: true,
  });

  const { isLoading: isLoadingRelease, data: newReleases } = useQuery({
    queryKey: ["books-home-release", page],
    queryFn: async () =>
      await api.get(
        `/products/filter/${newReleaseCategory}?skip=${skip}&take=${take}`
      ),
    keepPreviousData: true,
  });

  return (
    <S.Container>
      <Header />

      <S.Content showsVerticalScrollIndicator={false}>
        <S.Banner source={Banner} />

        {isLoadingRelease && isLoadingBest ? (
          <ActivityIndicator
            color="#F00"
            size="large"
            style={{ marginTop: 100, marginBottom: 100 }}
          />
        ) : (
          <>
            {bestSeller && (
              <BooksListCategory
                title="Mais vendidos"
                category={bestSeller?.data?.categories}
              />
            )}
            {newReleases && (
              <BooksListCategory
                title="Lançamentos"
                category={newReleases?.data?.categories}
              />
            )}
          </>
        )}
        <Footer />
      </S.Content>
    </S.Container>
  );
}
