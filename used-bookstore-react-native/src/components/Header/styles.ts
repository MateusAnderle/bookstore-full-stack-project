import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  background-color: #bf0a0d;
`;

export const ContentContainer = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #bf0a0d;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconsAndTitle = styled.TouchableOpacity`
  flex-direction: row;
`;

export const IconBox = styled.View`
  background-color: #fbefe3;
  padding: 5px;
  margin-right: 10px;
  border-radius: 15px;
`;

export const Notification = styled.View`
  position: absolute;
  top: -5px;
  right: 7px;
  background: #80d6f7;
  padding: 2px 6px;
  border-radius: 15px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: bold;
`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fbefe3;
`;

export const Description = styled.Text`
  color: #fbefe3;
`;

export const EndIcons = styled.View`
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  background-color: #bf0a0d;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px 20px;
`;

export const input = styled.TextInput`
  background-color: #fbefe3;
  flex: 1;
  height: 30px;
  padding: 0 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  background-color: #f6dbc1;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const CategoryButton = styled.TouchableOpacity`
  padding: 10px 20px;
`;

export const CategoryItem = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
