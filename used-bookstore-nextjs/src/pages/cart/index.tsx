import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CartButton,
  CartContainer,
  CartContent,
  CartInsideBox,
  CartTotal,
  CentralizeCartContainer,
  EmptyList,
  Table,
  TBody,
  TdCart,
} from "../../styles/pages/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currencyBRL } from "../../utils/currencyFormatter";
import { useAuth } from "../../hooks/auth";
import { api } from "../../utils/api";

export default function Cart() {
  const router = useRouter();
  const [itemsCart, setItemsCart] = useState<number>();
  const [totalCart, setTotalCart] = useState<number>();
  const { token, signOut } = useAuth();
  const {
    products,
    removeProductCart,
    addQuantity,
    subQuantity,
    setTotalCartCheckout,
  } = useContext(CartContext);

  async function isTokenValid() {
    if (!!token) {
      try {
        await api.get(`/auth/token`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        toast.error("Session expired! Please log in again");
        console.log(error);
        setTimeout(() => {
          signOut();
        }, 1500);
      }
    }
  }

  function removeProduct(productId: string) {
    removeProductCart(productId);
    const notify = () => toast.warn("Product removed from cart");
    notify();
  }

  function addProduct(productId: string) {
    addQuantity(productId);
    const notify = () => toast.success("Product added");
    notify();
  }

  function subProduct(productId: string) {
    subQuantity(productId);
    const notify = () => toast.warn("Product removed");
    notify();
  }

  async function goToCheckout() {
    if (!token) {
      return toast.warn("To proceed, you need to be logged in");
    }

    setTotalCartCheckout({
      numberOfItems: itemsCart,
      totalPriceCart: totalCart,
    });
    router.push(`/checkout`);
  }

  useEffect(() => {
    function itemsQuantity() {
      const initialValue = 0;
      const numberOfItems = products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantidade,
        initialValue
      );
      setItemsCart(numberOfItems);
    }

    itemsQuantity();
  }, [products]);

  useEffect(() => {
    function totalPrice() {
      const initialValue = 0;
      const priceOfItems = products.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.preco * currentValue.quantidade,
        initialValue
      );
      setTotalCart(priceOfItems);
    }
    totalPrice();
  }, [products]);

  useEffect(() => {
    isTokenValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CentralizeCartContainer>
      <CartContainer>
        <h2>Carrinho de compras</h2>
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

        {products.length ? (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Author</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <TBody>
                {products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Image
                          src={item.image}
                          width={90}
                          height={110}
                          alt=""
                          unoptimized={true}
                        />
                      </td>
                      <td>{item.livro}</td>
                      <td>{item.autor}</td>
                      <td>
                        <TdCart>
                          <MinusCircle
                            size={18}
                            onClick={() => subProduct(item.id)}
                          />
                          {item.quantidade}
                          <PlusCircle
                            size={18}
                            onClick={() => addProduct(item.id)}
                          />
                        </TdCart>
                      </td>
                      <td>{currencyBRL(item.preco)}</td>
                      <td>
                        <Trash
                          onClick={() => removeProduct(item.id)}
                          size={18}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </TBody>
            </Table>

            <CartTotal>
              <CartContent>
                <CartInsideBox>
                  <div>Total quantity:</div>
                  <div>{itemsCart}</div>
                </CartInsideBox>
                <CartInsideBox>
                  <div>Purchase amount:</div>
                  <div>{currencyBRL(totalCart || 0)}</div>
                </CartInsideBox>

                <span>Your purchase can be paid in up to 10 installments without interest</span>

                <CartButton onClick={goToCheckout}>
                Insert delivery information
                </CartButton>
              </CartContent>
            </CartTotal>
          </>
        ) : (
          <EmptyList>
            <h3>Empty cart...</h3>
            <Link href="/">
              <span>Keep browsing</span>
            </Link>
          </EmptyList>
        )}
      </CartContainer>
    </CentralizeCartContainer>
  );
}
