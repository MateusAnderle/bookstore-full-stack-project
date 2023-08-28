import { useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { companyInfoTexts } from "../../utils/companyInfoTexts";
import * as S from "./styles";

export function CompanyInfo() {
  const route = useRoute<any>();
  const infoTitle = route.params.info;
  const infoResponse = companyInfoTexts.find((text) => text.info === infoTitle);

  return (
    <S.Container>
      <Header />
      <BackButton />
      <S.Content>
        <S.Title>{infoTitle}</S.Title>
        <S.Text>
          {infoResponse === undefined
            ? "Ocorreu algum erro!"
            : infoResponse.text}
        </S.Text>
        <Footer />
      </S.Content>
    </S.Container>
  );
}
