import {
  Container,
  Form,
  SubmitContainer,
  Title,
  TwoInputsContainer,
} from "@/styles/pages/productRegistration";
import { api } from "@/utils/api";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { BookCreateProps } from "../productRegistration";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registrationSchema = yup
  .object({
    name: yup.string().required("Este campo é obrigatório"),
    author: yup.string().required("Este campo é obrigatório"),
    year: yup
      .number()
      .integer("Este campo não pode conter decimais")
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    genre: yup.string().required("Este campo é obrigatório"),
    bookcover: yup.string().required("Este campo é obrigatório"),
    amount: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    sugestPrice: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    price: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    synopsis: yup.string().required("Este campo é obrigatório"),
    language: yup.string().required("Este campo é obrigatório"),
    isbn: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    manufacturer: yup.string().required("Este campo é obrigatório"),
    dimensions: yup.string().required("Este campo é obrigatório"),
  })
  .required();

export default function ProductRegistration() {
  const router = useRouter();
  const id = router.query.id;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookCreateProps>({ resolver: yupResolver(registrationSchema) });

  async function fetchBook() {
    try {
      setIsLoader(true);
      const response = await api.get(`/products/${id}`);
      setValue("isbn", response.data.isbn);
      setValue("name", response.data.livro);
      setValue("author", response.data.autor);
      setValue("year", response.data.ano);
      setValue("genre", response.data.genero);
      setValue("bookcover", response.data.image);
      setValue("amount", response.data.quantidade);
      setValue("sugestPrice", response.data.precoSugerido);
      setValue("price", response.data.preco);
      setValue("synopsis", response.data.sinopse);
      setValue("language", response.data.idioma);
      setValue("manufacturer", response.data.fabricante);
      setValue("dimensions", response.data.dimensoes);

      setIsLoader(false);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data: BookCreateProps) => {
    try {
      setIsLoading(true);
      await api.put(`/products/${id}`, {
        livro: data.name,
        autor: data.author,
        ano: Number(data.year),
        genero: data.genre,
        image: data.bookcover,
        quantidade: Number(data.amount),
        precoSugerido: Number(data.sugestPrice),
        preco: Number(data.price),
        sinopse: data.synopsis,
        idioma: data.language,
        isbn: String(data.isbn),
        fabricante: data.manufacturer,
        dimensoes: data.dimensions,
      });
      setIsLoading(false);
      reset();
      router.push("/");
    } catch (error) {
      console.log(error);
      const notify = () => toast.error("Erro ao cadastrar!");
      notify();
    }
  };

  useEffect(() => {
    fetchBook();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Title>Editar produto</Title>

        {isLoader ? (
          <Loader />
        ) : (
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TwoInputsContainer>
                <label>
                  ISBN:
                  <input
                    type="number"
                    step="1"
                    placeholder="Verifique o ISBN"
                    {...register("isbn")}
                  />
                  {errors.isbn && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.isbn.message}
                    </span>
                  )}
                </label>

                <label>
                  Nome do produto:
                  <input
                    placeholder="Digite aqui o nome do produto"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Autor:
                  <input
                    placeholder="Digite aqui o autor"
                    {...register("author")}
                  />
                  {errors.author && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.author.message}
                    </span>
                  )}
                </label>

                <label>
                  Ano de publicação:
                  <input
                    type="number"
                    step="1"
                    placeholder="Digite aqui o ano de publicação"
                    {...register("year")}
                  />
                  {errors.year && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.year.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Gênero:
                  <input
                    placeholder="Digite aqui o gênero do livro"
                    {...register("genre")}
                  />
                  {errors.genre && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.genre.message}
                    </span>
                  )}
                </label>

                <label>
                  Capa:
                  <input
                    placeholder="Selecione uma imagem (URL) com a capa do livro"
                    {...register("bookcover")}
                  />
                  {errors.bookcover && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.bookcover.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Quantidade:
                  <input
                    type="number"
                    step="1"
                    placeholder="Digite aqui a quantidade que deseja cadastrar"
                    {...register("amount")}
                  />
                  {errors.amount && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.amount.message}
                    </span>
                  )}
                </label>

                <label>
                  Preço sugerido pela editora:
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Digite aqui o preço sugerido"
                    {...register("sugestPrice")}
                  />
                  {errors.sugestPrice && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.sugestPrice.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Preço de venda:
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Digite aqui o preço de venda"
                    {...register("price")}
                  />
                  {errors.price && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.price.message}
                    </span>
                  )}
                </label>

                <label>
                  Sinopse:
                  <input
                    placeholder="Digite uma sinopse para esse livro"
                    {...register("synopsis")}
                  />
                  {errors.synopsis && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.synopsis.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Idioma do livro:
                  <input
                    placeholder="Digite aqui o idioma do produto"
                    {...register("language")}
                  />
                  {errors.language && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.language.message}
                    </span>
                  )}
                </label>

                <label>
                  Editora:
                  <input
                    placeholder="Digite a editora do produto"
                    {...register("manufacturer")}
                  />
                  {errors.manufacturer && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.manufacturer.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <TwoInputsContainer>
                <label>
                  Dimensões do livro:
                  <input
                    placeholder="Digite aqui as dimensões do produto"
                    {...register("dimensions")}
                  />
                  {errors.dimensions && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.dimensions.message}
                    </span>
                  )}
                </label>
              </TwoInputsContainer>

              <SubmitContainer>
                <input
                  type="submit"
                  value="Atualizar produto"
                  style={{ cursor: "pointer" }}
                />
                {isLoading && (
                  <Oval
                    height={30}
                    width={30}
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
              </SubmitContainer>
            </Form>
          </Container>
        )}
      </main>
    </>
  );
}
