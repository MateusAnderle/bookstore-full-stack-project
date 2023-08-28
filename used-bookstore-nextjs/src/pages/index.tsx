import Head from "next/head";
import { CentralizeContainer, Container } from "../styles/pages/home";
import BooksList from "../components/BooksList";
import { useState } from "react";
import { api } from "../utils/api";
import Loader from "../components/Loader";
import Pagination from "../components/BooksList/components/pagination";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  const fetchBooks = async () =>
    await api.get(`/products?skip=${skip}&take=${take}`);

  const { isLoading, data: query } = useQuery({
    queryKey: ["books-home", page],
    queryFn: () => fetchBooks(),
    keepPreviousData: true,
  });

  async function previousClick() {
    if (page === 1) return;

    setSkip(skip - take);
    setPage(page - 1);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }

  async function nextClick() {
    if (page === query?.data?.pages) return;

    setSkip(skip + take);
    setPage(page + 1);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }

  return (
    <CentralizeContainer>
      <Container>
        <Head>
          <title>Sebus</title>
        </Head>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BooksList
              title="Os mais vendidos"
              bookData={query?.data?.products}
            />
            {query?.data?.pages >= 2 && (
              <Pagination
                pageNumber={page}
                previousClick={previousClick}
                nextClick={nextClick}
              />
            )}
          </>
        )}
      </Container>
    </CentralizeContainer>
  );
}
