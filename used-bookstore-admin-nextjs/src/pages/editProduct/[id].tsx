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
    name: yup.string().required("This field is required"),
    author: yup.string().required("This field is required"),
    year: yup
      .number()
      .integer("This field cannot contain decimals")
      .required("This field is required")
      .typeError("This field only allows numbers"),
    genre: yup.string().required("This field is required"),
    bookcover: yup.string().required("This field is required"),
    amount: yup
      .number()
      .required("This field is required")
      .typeError("This field only allows numbers"),
    sugestPrice: yup
      .number()
      .required("This field is required")
      .typeError("This field only allows numbers"),
    price: yup
      .number()
      .required("This field is required")
      .typeError("This field only allows numbers"),
    synopsis: yup.string().required("This field is required"),
    language: yup.string().required("This field is required"),
    isbn: yup
      .number()
      .required("This field is required")
      .typeError("This field only allows numbers"),
    manufacturer: yup.string().required("This field is required"),
    dimensions: yup.string().required("This field is required"),
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
      const notify = () => toast.error("Registration error");
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
        <Title>Edit product</Title>

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
                    placeholder="ISBN"
                    {...register("isbn")}
                  />
                  {errors.isbn && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.isbn.message}
                    </span>
                  )}
                </label>

                <label>
                  Product name:
                  <input
                    placeholder="Product name"
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
                Author:
                  <input
                    placeholder="Author"
                    {...register("author")}
                  />
                  {errors.author && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.author.message}
                    </span>
                  )}
                </label>

                <label>
                Year of publication:
                  <input
                    type="number"
                    step="1"
                    placeholder="Year of publication"
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
                  Book genre:
                  <input
                    placeholder="Book genre"
                    {...register("genre")}
                  />
                  {errors.genre && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.genre.message}
                    </span>
                  )}
                </label>

                <label>
                  Book cover:
                  <input
                    placeholder="Select an image (URL) with the book cover"
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
                  Quantity:
                  <input
                    type="number"
                    step="1"
                    placeholder="Quantity"
                    {...register("amount")}
                  />
                  {errors.amount && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.amount.message}
                    </span>
                  )}
                </label>

                <label>
                  Suggest price:
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Suggest price"
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
                  Price:
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Price"
                    {...register("price")}
                  />
                  {errors.price && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.price.message}
                    </span>
                  )}
                </label>

                <label>
                Synopsis:
                  <input
                    placeholder="Synopsis"
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
                Language:
                  <input
                    placeholder="Language"
                    {...register("language")}
                  />
                  {errors.language && (
                    <span style={{ color: "#f00", fontStyle: "italic" }}>
                      {errors.language.message}
                    </span>
                  )}
                </label>

                <label>
                Manufacturer:
                  <input
                    placeholder="Manufacturer"
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
                Dimensions:
                  <input
                    placeholder="Dimensions"
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
                  value="Update product"
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
