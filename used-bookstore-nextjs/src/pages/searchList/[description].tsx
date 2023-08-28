import Head from "next/head";
import BooksList, { BooksProps } from "../../components/BooksList";
import {
  CategoryContainer,
  CentralizeCategoryContainer,
} from "../../styles/pages/searchList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loader from "../../components/Loader";
import Pagination from "../../components/BooksList/components/pagination";

interface SearchDataProps {
  filteredBooks: BooksProps[];
  pages: number;
}

export default function SearchList() {
  const router = useRouter();
  const searchQuery = router.query.description;
  const [data, setData] = useState<SearchDataProps | null>(null);
  const [isLoading, seIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  async function fetchSearchQuery() {
    try {
      const response = await api.get(
        `/products/search/${searchQuery}?skip=${skip}&take=${take}`
      );
      setData(response?.data);
    } catch (error) {
      console.log(error);
      setData(null);
    } finally {
      seIsLoading(false);
    }
  }

  async function previousClick() {
    if (page === 1) return;

    setSkip(skip - take);
    setPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function nextClick() {
    if (page === data?.pages) return;

    setSkip(skip + take);
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetchSearchQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    fetchSearchQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return (
    <CentralizeCategoryContainer>
      <CategoryContainer>
        <Head>
          <title>Sebus</title>
        </Head>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BooksList
              title={`Exibindo resultados para: "${searchQuery}"`}
              bookData={data!?.filteredBooks}
            />
            {data!?.pages >= 2 && (
              <Pagination
                pageNumber={page}
                previousClick={previousClick}
                nextClick={nextClick}
              />
            )}
          </>
        )}
      </CategoryContainer>
    </CentralizeCategoryContainer>
  );
}
