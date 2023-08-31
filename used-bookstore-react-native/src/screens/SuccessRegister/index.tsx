import * as S from "./styles";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Image } from "react-native";
import CongratulationImage from "../../assets/congratulations.png";
import { useNavigation } from "@react-navigation/native";

export function SuccessRegister() {
  const { navigate } = useNavigation<any>();

  return (
    <S.Container>
      <Header />
      <S.ScrollRegister showsVerticalScrollIndicator={false}>
        <S.Content>
          <Image
            source={CongratulationImage}
            style={{
              width: "100%",
              height: 80,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          <S.Title>Registration completed successfully!</S.Title>
          <S.Description>Continue browsing our app</S.Description>

          <S.LoginButton onPress={() => navigate("Home")}>
            <S.LoginButtonText>Return to the homepage</S.LoginButtonText>
          </S.LoginButton>
        </S.Content>

        <Footer />
      </S.ScrollRegister>
    </S.Container>
  );
}
