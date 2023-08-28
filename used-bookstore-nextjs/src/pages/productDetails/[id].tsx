import {
  ProductButton,
  ProductDatasheet,
  ProductDescriptionText,
  ProductDescriptionTop,
  ProductDetailContainer,
  ProductDetailContent,
  ProductImageAndDescription,
  ProductPriceAndCart,
  ProductSynopsis,
  ProductTopContent,
  Td,
} from "../../styles/pages/productDetail";
import Image from "next/image";
import Separator from "../../components/separator";
import { useRouter } from "next/router";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { api, zipCodeApi } from "../../utils/api";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import { currencyBRL } from "../../utils/currencyFormatter";
import { BooksProps } from "@/components/BooksList";

interface ZipCodeFormProps {
  zipCode: string;
}

interface ZipCodeObjectProps {
  localidade: string;
  logradouro: string;
}

export default function ProductDetails() {
  const router = useRouter();
  const id = router.query.id;
  const [zipCodeObject, setZipCodeObject] = useState({} as ZipCodeObjectProps);
  const { addProductCart, products } = useContext(CartContext);
  const [data, setData] = useState<BooksProps>();
  const [isLoading, seIsLoading] = useState(false);

  async function fetchBooks() {
    try {
      const response = await api.get(`/products/${id}`);
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      seIsLoading(false);
    }
  }

  useEffect(() => {
    seIsLoading(true);
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ZipCodeFormProps>();

  const onSubmit = async (data: ZipCodeFormProps) => {
    try {
      const response = await zipCodeApi.get(`/${data.zipCode}/json/`);
      setZipCodeObject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function addToCart() {
    const findEqual = products.find((item) => item.id === data!.id);
    if (findEqual) {
      const notify = () => toast.error("Produto já existente no carrinho!");
      notify();
      return;
    }

    if (data!.quantidade < 1) {
      const notify = () =>
        toast.error("Não há mais estoque para esse produto!");
      notify();
      return;
    }

    data!.quantidade = 1;
    addProductCart(data!);
    const notify = () => toast.success("Produto adicionado ao carrinho!");
    notify();
  }

  return (
    <ProductDetailContainer>
      <Head>
        <title>Sebus</title>
      </Head>
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
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <ProductDetailContent>
            <ProductTopContent>
              <ProductImageAndDescription>
                <Image
                  src={data.image}
                  width={300}
                  height={400}
                  alt=""
                  style={{ objectFit: "cover" }}
                  unoptimized={true}
                />

                <ProductDescriptionTop>
                  <ProductDescriptionText variant="title">
                    {data.livro}
                  </ProductDescriptionText>
                  <ProductDescriptionText variant="description">
                    {data.autor}
                  </ProductDescriptionText>
                  <ProductDescriptionText variant="synopsis">
                    {data.sinopse}
                  </ProductDescriptionText>
                  <a href="#">Mais informações</a>
                </ProductDescriptionTop>
              </ProductImageAndDescription>

              <ProductPriceAndCart>
                <ProductDescriptionText variant="description">
                  Preço sugerido na editora: {currencyBRL(data?.precoSugerido)}
                </ProductDescriptionText>
                <ProductDescriptionText variant="title">
                  {currencyBRL(data?.preco)}
                </ProductDescriptionText>
                <ProductDescriptionText variant="description">
                  Em 1x no cartão de crédito sem juros
                </ProductDescriptionText>
                <Separator top={30} bottom={30} />
                <ProductDescriptionText variant="description">
                  Calcular tempo de entrega:
                </ProductDescriptionText>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Digite seu CEP"
                    minLength={8}
                    maxLength={8}
                    {...register("zipCode", { required: true })}
                  />

                  <input type="submit" value="OK" />
                  {errors.zipCode && (
                    <span style={{ marginTop: "5px" }}>
                      {errors.zipCode.message}
                    </span>
                  )}
                  {zipCodeObject.localidade && (
                    <div>
                      <h5 style={{ marginTop: "5px" }}>
                        <b>Envio para: </b>
                      </h5>
                      <p style={{ marginTop: "5px" }}>
                        {" "}
                        {zipCodeObject.logradouro}, {zipCodeObject.localidade}{" "}
                      </p>
                      <p style={{ marginTop: "5px" }}>
                        <b>
                          A entrega para esse endereço costuma demorar de 5 a 10
                          dias úteis
                        </b>
                      </p>
                    </div>
                  )}
                </form>

                <Separator top={30} bottom={30} />
                <ProductButton onClick={addToCart} variant="green">
                  COMPRAR
                </ProductButton>
                <ProductDescriptionText variant="footer">
                  Este produto é vendido e entregue por Sebus
                </ProductDescriptionText>
              </ProductPriceAndCart>
            </ProductTopContent>

            <ProductSynopsis>
              <h3>Sinopse</h3>
              <p>{data.sinopse}</p>
            </ProductSynopsis>

            <ProductDatasheet>
              <h3>Ficha técnica</h3>
              <table>
                <tbody>
                  <tr>
                    <Td variant="key">Livro</Td>
                    <Td variant="value">{data.livro}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Autor</Td>
                    <Td variant="value">{data.autor}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Gênero</Td>
                    <Td variant="value">{data.genero}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Quantidade em estoque</Td>
                    <Td variant="value">{data.quantidade}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Data de publicação</Td>
                    <Td variant="value">{data.ano}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Idioma</Td>
                    <Td variant="value">{data.idioma}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Código de barras (ISBN)</Td>
                    <Td variant="value">{data.isbn}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Fabricante</Td>
                    <Td variant="value">{data.fabricante}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Dimensões do produto</Td>
                    <Td variant="value">{data.dimensoes}</Td>
                  </tr>
                </tbody>
              </table>
            </ProductDatasheet>
          </ProductDetailContent>
        )
      )}
    </ProductDetailContainer>
  );
}
