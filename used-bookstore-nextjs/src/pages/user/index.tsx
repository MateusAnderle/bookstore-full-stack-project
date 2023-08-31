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
      toast.error("Session expired! Please log in again");
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

              <h3>Welcome!</h3>

              <Logout>
                <p>To log out of your account, click here:</p>
                <button onClick={signOut}>
                  <SignOut size={24} />
                  Logout
                </button>
              </Logout>
            </SideInfo>

            <OrdersContent>
              <h3>Order history:</h3>

              {data
                ? data.map((order: OrderProps) => {
                    return (
                      <OrderBox key={order.id}>
                        <ContentOrderBox>
                          <p>
                            <b>
                            Purchase date: {dateInDMY(order?.created_at)}
                            </b>
                          </p>
                          <p>
                            <b>
                            Purchase time: {dateInHMS(order?.created_at)}
                            </b>
                          </p>
                          <p>Items: {order?.orderSummary[0]?.numberOfItems}</p>
                          <p>
                          Total purchase amount:{" "}
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
            <h2>You do not have permission to be on this page</h2>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span>Return to homepage</span>
            </Link>
          </ForbiddenAccess>
        </ForbiddenAccessContainer>
      )}
    </CentralizeContainerUser>
  );
}
