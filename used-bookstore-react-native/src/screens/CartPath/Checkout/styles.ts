import styled from "styled-components/native";

interface PaymentButtonProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  align-items: center;
`;

export const ScrollRegister = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const HeaderTitle = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  margin: 0 20px 10px;
  border-radius: 10px;
`;

export const PageTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Content = styled.View`
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  height: 45px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 15px;
`;

export const PaymentTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PaymentButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const PaymentButton = styled.TouchableOpacity`
  background-color: #ccc;
  padding: 14px 8px;
  margin:5px;
  border-radius: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  ${({ active }: PaymentButtonProps) =>
    active ? "border: 2px solid #000" : null};
`;

export const PaymentButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export const ConfirmForm = styled.TouchableOpacity`
  padding: 15px;
  background-color: #80d6f7;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const OrderTitle = styled.Text`
  font-size: 20px;
  font-weight: 800;
`;

export const SubtitleOrder = styled.Text`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 25px;
`;

export const DescriptionOrder = styled.Text`
  font-size: 14px;
`;

export const CheckouButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #40cd28;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CheckouButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
