import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #efefef;
  align-items: center;
`;

export const ScrollList = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const ProductBox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  margin-bottom: 20px;
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

export const Price = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
`;

export const SuggestedPrice = styled.Text`
  margin-top: -5px;
  margin-bottom: 20px;
`;

export const BuyButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #40cd28;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TextBuyButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const PaymentConditions = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const BuyDescription = styled.Text`
  font-size: 12px;
`;

export const SynopsisTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Synopsis = styled.Text`
  font-size: 14px;
  text-align: justify;
`;

export const ProductDatasheetTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DataSheetLine = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3px;
`;

export const DataKey = styled.View`
  width: 100px;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #ccc;
`;

export const DataValue = styled.View`
  flex: 1;
  min-height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
`;

export const DataTextTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const DataTextDescription = styled.Text`
  font-size: 14px;
`;
