import styled from "styled-components/native";

export const PageContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const PageCounter = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #bf0a0d;
  padding: 5px 10px;
`;

export const NextPrev = styled.TouchableOpacity`
  border: none;
  font-size: 22px;
  background: #bf0a0d;
  color: gray;
  padding: 5px 15px;
  font-weight: bold;
`;
