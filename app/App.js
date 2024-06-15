import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/member/LoginScreen";
import SignupScreen from "./screens/member/SignupScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "로그인" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "회원가입" }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return;
}

function Navigation() {
  return (
    <NavigationContainer>
      {/* TO-DO 로그인 여부에 따른 Stack 변경처리 */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}
