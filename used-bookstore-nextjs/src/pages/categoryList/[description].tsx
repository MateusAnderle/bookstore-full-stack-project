import Head from "next/head";
import BooksList, { BooksProps } from "../../components/BooksList";
import {
  CategoryContainer,
  CentralizeCategoryContainer,
} from "../../styles/pages/categoryList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loader from "../../components/Loader";
import Pagination from "../../components/BooksList/components/pagination";

interface DataProps {
  pages: number;
  categories: BooksProps[];
  totalCategories: number;
}

export default function CategoryList() {
  const router = useRouter();
  const category = router.query.description;
  const [data, setData] = useState({} as DataProps | null);
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
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    fetchCategory();
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
              title={(category as string) || "Sebus"}
              bookData={data?.categories || []}
            />
            { data && data?.pages >= 2 && (
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
