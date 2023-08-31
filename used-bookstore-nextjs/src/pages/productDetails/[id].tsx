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
      const notify = () => toast.error("Product already in cart");
      notify();
      return;
    }

    if (data!.quantidade < 1) {
      const notify = () =>
        toast.error("No more stock available for this product");
      notify();
      return;
    }

    data!.quantidade = 1;
    addProductCart(data!);
    const notify = () => toast.success("Product added to cart!");
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
                  <a href="#">More information</a>
                </ProductDescriptionTop>
              </ProductImageAndDescription>

              <ProductPriceAndCart>
                <ProductDescriptionText variant="description">
                  Publisher&apos;s suggested price: {currencyBRL(data?.precoSugerido)}
                </ProductDescriptionText>
                <ProductDescriptionText variant="title">
                  {currencyBRL(data?.preco)}
                </ProductDescriptionText>
                <ProductDescriptionText variant="description">
                Payment on credit card with no interest
                </ProductDescriptionText>
                <Separator top={30} bottom={30} />
                <ProductDescriptionText variant="description">
                Calculate delivery time:
                </ProductDescriptionText>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="ZIP Code"
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
                        <b>Send to: </b>
                      </h5>
                      <p style={{ marginTop: "5px" }}>
                        {" "}
                        {zipCodeObject.logradouro}, {zipCodeObject.localidade}{" "}
                      </p>
                      <p style={{ marginTop: "5px" }}>
                        <b>
                        Delivery to this address usually takes 5 to 10 business days
                        </b>
                      </p>
                    </div>
                  )}
                </form>

                <Separator top={30} bottom={30} />
                <ProductButton onClick={addToCart} variant="green">
                  BUY
                </ProductButton>
                <ProductDescriptionText variant="footer">
                This product is sold and delivered by Sebus
                </ProductDescriptionText>
              </ProductPriceAndCart>
            </ProductTopContent>

            <ProductSynopsis>
              <h3>Synopsis</h3>
              <p>{data.sinopse}</p>
            </ProductSynopsis>

            <ProductDatasheet>
              <h3>Technical specifications</h3>
              <table>
                <tbody>
                  <tr>
                    <Td variant="key">Book</Td>
                    <Td variant="value">{data.livro}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Author</Td>
                    <Td variant="value">{data.autor}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Genre</Td>
                    <Td variant="value">{data.genero}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Quantity</Td>
                    <Td variant="value">{data.quantidade}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Publish year</Td>
                    <Td variant="value">{data.ano}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Language</Td>
                    <Td variant="value">{data.idioma}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">(ISBN)</Td>
                    <Td variant="value">{data.isbn}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Publisher</Td>
                    <Td variant="value">{data.fabricante}</Td>
                  </tr>
                  <tr>
                    <Td variant="key">Dimensions</Td>
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
