import * as S from "./styles";
import { Text } from "react-native";
interface PaginationProps {
  pageNumber: number;
  previousClick: () => void;
  nextClick: () => void;
}

export default function Pagination({
  pageNumber = 0,
  previousClick,
  nextClick,
}: PaginationProps) {
  return (
    <S.PageContainer>
      <S.NextPrev
        style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
        onPress={previousClick}
      >
        <Text style={{ color: "#fff" }}>«</Text>
      </S.NextPrev>
      <S.PageCounter>Page {pageNumber}</S.PageCounter>
      <S.NextPrev
        style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        onPress={nextClick}
      >
        <Text style={{ color: "#fff" }}>»</Text>
      </S.NextPrev>
    </S.PageContainer>
  );
}
