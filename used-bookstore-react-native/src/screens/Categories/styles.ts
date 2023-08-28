import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
`;

export const EmptyList = styled.Text`
  margin: 40px 20px;
`;

export const BookBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 48%;
`;

export const BookImage = styled.Image`
  width: 60px;
  height: 90px;
`;

export const BookTitle = styled.Text`
  margin-top: 10px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const BookAuthor = styled.Text`
  flex-wrap: wrap;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
`;

export const BookPrice = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
