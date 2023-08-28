import * as S from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Footer() {
  const { navigate } = useNavigation<any>();

  const companyInfoList = [
    { id: 1, type: "FAQ" },
    { id: 2, type: "Sobre nós" },
    { id: 3, type: "Onde estamos" },
    { id: 4, type: "Entregas e devoluções" },
    { id: 5, type: "Termos e condições" },
    { id: 6, type: "Política de Cookies" },
  ];

  return (
    <S.Container>
      <S.Title>Informações</S.Title>
      {companyInfoList.map((item) => {
        return (
          <S.DB
            key={item.id}
            onPress={() => navigate("CompanyInfo", { info: item.type })}
          >
            <S.Description>{item.type}</S.Description>
          </S.DB>
        );
      })}

      <S.Spacer />

      <S.Title>Contato</S.Title>

      <S.Phone>(47) 3370-9999</S.Phone>

      <S.Description>Av. Marechal Deodoro da Fonseca</S.Description>
      <S.Description>Centro, Jaraguá do Sul</S.Description>
      <S.Description>CNPJ: 08.999.999/0001-50</S.Description>

      <S.IconsBox>
        <FontAwesome5 name="facebook-square" size={30} color={"#FFF"} />
        <FontAwesome5 name="instagram" size={30} color={"#FFF"} />
        <FontAwesome5 name="twitter-square" size={30} color={"#FFF"} />
        <FontAwesome5 name="youtube" size={30} color={"#FFF"} />
      </S.IconsBox>

      <S.Description>Feito por @matsanderle - 2022.</S.Description>
    </S.Container>
  );
}
