import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  align-items: center;
`;

export const ScrollRegister = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

export const Content = styled.View`
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  background-color: #ddd;
  border-radius: 10px;
`;

export const LoginButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
