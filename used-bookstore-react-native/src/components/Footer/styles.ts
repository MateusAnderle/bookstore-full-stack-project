import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
  padding: 20px 20px 50px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #bf0a0d;
`;

export const Spacer = styled.View`
  margin: 40px 0 30px;
  width: 40%;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #fff;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const DB = styled.TouchableOpacity``;

export const Phone = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
`;

export const IconsBox = styled.View`
  width: 70%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;
