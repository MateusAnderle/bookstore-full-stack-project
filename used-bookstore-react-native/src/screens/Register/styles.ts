import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  align-items: center;
`;

export const ScrollRegister = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  margin-top: 20px;
`;

export const ContainerError = styled.View`
  margin-top: 0;
`;

export const TextError = styled.Text`
  color: #f00;
  font-style: italic;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
`;

export const LoginButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
