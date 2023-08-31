import * as S from "./styles";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import { api } from "../../utils/api";
import { dateInDMY, dateInHMS } from "../../utils/dateFormatter";
import { currencyBRL } from "../../utils/currencyFormatter";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FontAwesome5 } from "@expo/vector-icons";

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
  const { navigate } = useNavigation<any>();

  async function isTokenValid() {
    try {
      await api.get(`/auth/token`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      Alert.alert("Session expired! Please log in again");
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

  function handleSignOut() {
    signOut();
    setTimeout(() => {
      navigate("Home");
    }, 2500);
  }

  useEffect(() => {
    seIsLoading(true);
    isTokenValid();
    fetchOrders();
  }, []);

  return (
    <S.Container>
      <Header />
      <BackButton />
      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        {token ? (
          isLoading ? (
            <ActivityIndicator
              color="#F00"
              size="large"
              style={{ marginTop: 100, marginBottom: 100 }}
            />
          ) : (
            <S.Content>
              <S.UserContainer>
                <S.Icon>
                  <FontAwesome5 name="user-circle" size={40} color={"#000"} />
                </S.Icon>
                <S.Greetings>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Welcome!
                  </Text>
                </S.Greetings>
                <Text>To log out of your account, click here</Text>
                <S.LogoutButton onPress={handleSignOut}>
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                  >
                    Logout
                  </Text>
                </S.LogoutButton>
              </S.UserContainer>

              <S.OrdersContainer>
                <S.OrdersTitle>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Order history
                  </Text>
                </S.OrdersTitle>

                {data
                  ? data.map((order: OrderProps) => {
                      return (
                        <S.OrderBox key={order.id}>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>
                            Purchase date: {dateInDMY(order?.created_at)}
                            </Text>
                          </View>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>
                            Purchase time: {dateInHMS(order?.created_at)}
                            </Text>
                          </View>
                          <View>
                            <Text>
                              Items: {order?.orderSummary[0]?.numberOfItems}
                            </Text>
                          </View>
                          <View>
                            <Text>
                            Purchase amount:{" "}
                              {currencyBRL(
                                order?.orderSummary[0]?.totalPriceCart
                              )}
                            </Text>
                          </View>
                        </S.OrderBox>
                      );
                    })
                  : null}
              </S.OrdersContainer>
            </S.Content>
          )
        ) : (
          <>
            <S.EmptyList>
              <Text style={{ marginBottom: 10 }}>
                You do not have permission to access this page
              </Text>
              <Text>You will be redirected to the home screen</Text>
            </S.EmptyList>
          </>
        )}
        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
