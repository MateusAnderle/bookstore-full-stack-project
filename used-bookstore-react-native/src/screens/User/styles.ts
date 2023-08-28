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
  align-items: center;
`;

export const UserContainer = styled.View`
  background: #efefef;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.View`
  margin-bottom: 10px;
`;

export const Greetings = styled.View`
  margin-bottom: 30px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 5px;
  background: #bf0a0d;
  padding: 5px 20px;
  border-radius: 5px;
`;

export const OrdersContainer = styled.View`
  background: #efefef;
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OrdersTitle = styled.View`
  margin-bottom: 30px;
`;

export const OrderBox = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const EmptyList = styled.View`
  flex-direction: column;
  margin: 40px 20px;
  justify-content: center;
  align-items: center;
`;
