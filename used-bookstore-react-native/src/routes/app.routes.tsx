import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Categories } from "../screens/Categories";
import { CompanyInfo } from "../screens/CompanyInfo";
import { ProductDetail } from "../screens/ProductDetail";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { SuccessRegister } from "../screens/SuccessRegister";
import { Cart } from "../screens/CartPath/Cart";
import { Checkout } from "../screens/CartPath/Checkout";
import { CheckoutSuccess } from "../screens/CartPath/CheckoutSuccess";
import { SearchList } from "../screens/SearchList";
import User from "../screens/User";

export function AppRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CompanyInfo"
          component={CompanyInfo}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SuccessRegister"
          component={SuccessRegister}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CheckoutSuccess"
          component={CheckoutSuccess}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SearchList"
          component={SearchList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
