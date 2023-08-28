import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 20px 20px;
`;

export const BookBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 20px;
  padding: 20px;
  width: 200px;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 150px;
`;

export const BookTitle = styled.Text`
  margin-top: 10px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const BookAuthor = styled.Text`
  flex-wrap: wrap;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;

export const BookPrice = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
