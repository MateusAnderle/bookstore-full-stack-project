import * as S from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Footer() {
  const { navigate } = useNavigation<any>();

  const companyInfoList = [
    { id: 1, type: "FAQ" },
    { id: 2, type: "About" },
    { id: 3, type: "Location" },
    { id: 4, type: "Deliveries and Returns" },
    { id: 5, type: "Terms and Conditions" },
    { id: 6, type: "Cookie Policy" },
  ];

  return (
    <S.Container>
      <S.Title>Information</S.Title>
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

      <S.Title>Contact</S.Title>

      <S.Phone>(47) 3370-9999</S.Phone>

      <S.Description>Av. Marechal Deodoro da Fonseca</S.Description>
      <S.Description>Jaraguá do Sul</S.Description>
      <S.Description>CNPJ: 08.999.999/0001-50</S.Description>

      <S.IconsBox>
        <FontAwesome5 name="facebook-square" size={30} color={"#FFF"} />
        <FontAwesome5 name="instagram" size={30} color={"#FFF"} />
        <FontAwesome5 name="twitter-square" size={30} color={"#FFF"} />
        <FontAwesome5 name="youtube" size={30} color={"#FFF"} />
      </S.IconsBox>

      <S.Description>Made by @matsanderle - 2023.</S.Description>
    </S.Container>
  );
}
