import {
  B,
  BookDescription,
  Booklist,
  BookTitle,
  Container,
  ContentWrapper,
  Title,
  ImageAndContent,
  ButtonIcons,
} from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import Loader from "@/components/Loader";
import { PencilSimple, Trash } from "phosphor-react";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import { currencyBRL } from "@/utils/currencyFormatter";
import { useQuery } from "@tanstack/react-query";

export interface BookReceivedProps {
  id: string;
  livro: string;
  autor: string;
  ano: number;
  genero: string;
  image: string;
  quantidade: number;
  precoSugerido: number;
  preco: number;
  sinopse: string;
  idioma: string;
  isbn: string;
  fabricante: string;
  dimensoes: string;
  created_at: string;
}

export default function Home() {
  const router = useRouter();
  const [iconIsLoading, setIconIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const take = 10;

  const fetchBooks = async () =>
    await api.get(`/products?skip=${skip}&take=${take}`);

  const { isLoading, data: query } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchBooks(),
    keepPreviousData: true,
  });

  function editBook(id: string) {
    router.push(`/editProduct/${id}`);
  }

  async function deleteBook(id: string) {
    try {
      setIconIsLoading(true);
      await api.delete(`/products/${id}`);
      const notify = () => toast.success("Produto removido do estoque!");
      notify();
      fetchBooks();
      setIconIsLoading(false);
    } catch (error) {
      console.log(error);
      const notify = () => toast.error("Erro ao deletar produto!");
      notify();
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
    if (page === query?.data?.pages) return;

    setSkip(skip + take);
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  return (
    <>
      <Head>
        <title>Sebus - Admin</title>
      </Head>

      <main>
        <ToastContainer
          style={{ marginTop: "60px" }}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Title>Produtos cadastrados</Title>
        <Container>
          <ul>
            {isLoading ? (
              <Loader />
            ) : query?.data?.products?.length > 0 ? (
              query?.data?.products?.map((book: BookReceivedProps) => {
                return (
                  <Booklist key={book.id}>
                    <ImageAndContent>
                      <Image src={book.image} height={120} width={120} alt="" unoptimized={true}/>

                      <ContentWrapper>
                        <BookTitle>{book.livro}</BookTitle>
                        <BookDescription>
                          <B>Autor:</B> {book.autor}
                        </BookDescription>
                        <BookDescription>
                          <B>Ano de publicação:</B> {book.ano}
                        </BookDescription>
                        <BookDescription>
                          <B>Gênero:</B> {book.genero}
                        </BookDescription>
                        <BookDescription>
                          <B>Quantidade em estoque:</B> {book.quantidade}
                        </BookDescription>
                        <BookDescription>
                          <B>Preço unitário: </B>
                          {currencyBRL(book.preco)}
                        </BookDescription>
                      </ContentWrapper>
                    </ImageAndContent>

                    <ButtonIcons>
                      {iconIsLoading && (
                        <Oval
                          height={35}
                          width={35}
                          color="#F00"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#F00"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      )}

                      <button onClick={() => editBook(book.id)}>
                        <PencilSimple size={24} /> Editar
                      </button>

                      <button onClick={() => deleteBook(book.id)}>
                        <Trash size={24} /> Excluir
                      </button>
                    </ButtonIcons>
                  </Booklist>
                );
              })
            ) : (
              <>
                <h3>Algo deu errado</h3>
                <p>Volte a página</p>
              </>
            )}
          </ul>

          {query?.data?.pages >= 2 && (
            <Pagination
              pageNumber={page}
              previousClick={previousClick}
              nextClick={nextClick}
            />
          )}
        </Container>
      </main>
    </>
  );
}
