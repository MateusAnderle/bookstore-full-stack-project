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
  align-items: center;
`;

export const CartLineBox = styled.View`
  flex-direction: row;
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom-color: #bbb;
  border-bottom-width: 0.7px;
  border-bottom-style: solid;
  align-items: center;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const B = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionBox = styled.View`
  flex: 1;
  flex-wrap: nowrap;
`;

export const Title = styled.Text`
  font-size: 14px;
`;

export const Author = styled.Text`
  font-size: 14px;
`;

export const Price = styled.Text`
  font-size: 14px;
`;

export const QuantDesc = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Quantity = styled.View`
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbefe3;
  align-items: center;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const QuantityTitle = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

export const CartTotalBox = styled.View`
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
`;

export const QuantityTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TotalTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const TotalSubtitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const PriceTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const DescriptionTotal = styled.Text`
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const CartTotalButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #40cd28;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 10px;
`;

export const CartTotalButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
