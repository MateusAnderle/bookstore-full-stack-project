import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Button onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        <S.Text>Back</S.Text>
      </S.Button>
    </S.Container>
  );
}
