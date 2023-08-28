import {
  CentralizeContainerUser,
  ContentOrderBox,
  ForbiddenAccess,
  ForbiddenAccessContainer,
  IconOrderBox,
  Logout,
  OrderBox,
  OrdersContent,
  SideInfo,
  UserContainer,
} from "../../styles/pages/user";
import { Info, SignOut, User as UserIcon } from "phosphor-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Loader from "../../components/Loader";
import { dateInDMY, dateInHMS } from "../../utils/dateFormatter";
import { currencyBRL } from "../../utils/currencyFormatter";
import { useAuth } from "../../hooks/auth";
import { ToastContainer, toast } from "react-toastify";

interface OrderSummaryProps {
  numberOfItems: number;
  totalPriceCart: number;
}

interface OrderProps {
  id: string;
  created_at: Date;
  orderSummary: OrderSummaryProps[];
}

export default function User() {
  const [data, setData] = useState([]);
  const [isLoading, seIsLoading] = useState(false);
  const { signOut, token, userData } = useAuth();

  async function isTokenValid() {
    try {
      await api.get(`/auth/token`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      toast.error("Sessão expirada! Por favor refaça seu Login");
      console.log(error);
      setData([]);
      setTimeout(() => {
        signOut();
      }, 1500);
    }
  }

  async function fetchOrders() {
    try {
      const response = await api.get(`/order/${userData}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      seIsLoading(false);
    }
  }

  useEffect(() => {
    seIsLoading(true);
    isTokenValid();
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CentralizeContainerUser>
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
      {token ? (
        isLoading ? (
          <Loader />
        ) : (
          <UserContainer>
            <SideInfo>
              <span>
                <UserIcon size={150} />
              </span>

              <h3>Bem vindo(a)!</h3>

              <Logout>
                <p>Para sair da conta, clique aqui:</p>
                <button onClick={signOut}>
                  <SignOut size={24} />
                  Sair
                </button>
              </Logout>
            </SideInfo>

            <OrdersContent>
              <h3>Histórico de pedidos:</h3>

              {data
                ? data.map((order: OrderProps) => {
                    return (
                      <OrderBox key={order.id}>
                        <ContentOrderBox>
                          <p>
                            <b>
                              Data da compra: {dateInDMY(order?.created_at)}
                            </b>
                          </p>
                          <p>
                            <b>
                              Hora da compra: {dateInHMS(order?.created_at)}
                            </b>
                          </p>
                          <p>Itens: {order?.orderSummary[0]?.numberOfItems}</p>
                          <p>
                            Total da compra:{" "}
                            {currencyBRL(
                              order?.orderSummary[0]?.totalPriceCart
                            )}
                          </p>
                        </ContentOrderBox>
                        <IconOrderBox>
                          <Info size={20} />
                        </IconOrderBox>
                      </OrderBox>
                    );
                  })
                : null}
            </OrdersContent>
          </UserContainer>
        )
      ) : (
        <ForbiddenAccessContainer>
          <ForbiddenAccess>
            <h2>Você não tem permissão para estar nessa página</h2>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span>Voltar à página inicial</span>
            </Link>
          </ForbiddenAccess>
        </ForbiddenAccessContainer>
      )}
    </CentralizeContainerUser>
  );
}
