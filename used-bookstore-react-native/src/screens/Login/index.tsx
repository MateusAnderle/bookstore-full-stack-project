import { Link, useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import LoginImage from "../../assets/login.png";
import { useForm, Controller } from "react-hook-form";
import { ActivityIndicator, Image } from "react-native";
import { useAuth } from "../../hooks/auth";
import { isPromise } from "../../utils/isPromise";

interface FormProps {
  login: string;
  password: string;
}

export function Login() {
  const { isLoading, signIn, token } = useAuth();
  const { navigate } = useNavigation<any>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  if (token && !isPromise(token)) {
    setTimeout(() => {
      return navigate("User");
    }, 1500);
  }

  const onSubmit = (data: FormProps) => {
    const { login, password } = data;
    try {
      return signIn({ login, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <Header />
      <BackButton />

      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        <S.Content>
          <Image
            source={LoginImage}
            style={{
              width: "100%",
              height: 80,
              borderRadius: 10,
            }}
          />

          <Controller
            name="login"
            control={control}
            rules={{ required: "E-mail obrigatório" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                placeholder="Digite seu login ou e-mail"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.login && (
            <S.ContainerError>
              <S.TextError>{errors.login.message}</S.TextError>
            </S.ContainerError>
          )}

          <Controller
            name="password"
            control={control}
            rules={{ required: "Password required" }}
            render={({ field: { onChange, value } }) => (
              <S.Input
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#AAA"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && (
            <S.ContainerError>
              <S.TextError>{errors.password.message}</S.TextError>
            </S.ContainerError>
          )}

          <S.LoginButton onPress={handleSubmit(onSubmit)}>
            <S.LoginButtonText>
              {isLoading ? (
                <ActivityIndicator
                  color="#F00"
                  size="small"
                  style={{ marginTop: 10, marginBottom: 10 }}
                />
              ) : (
                "Login"
              )}
            </S.LoginButtonText>
          </S.LoginButton>

          <S.LoginRegister>
          Don't have an account yet?{" "}
            <Link
              to={{ screen: "Register" }}
              style={{ fontWeight: "bold", color: "#005eff" }}
            >
              Click here!
            </Link>
          </S.LoginRegister>
        </S.Content>

        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
