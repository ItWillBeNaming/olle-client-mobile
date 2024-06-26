import LoginScreen from "./screens/member/LoginScreen";
import SignupScreen from "./screens/member/SignupScreen";
import Welcome from "./screens/Welcome";
import PostList from "./screens/board/PostList";
import { Colors } from "./constants/Colors/Colors";

import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MyPage from "./screens/user/MyPage";
import IconButton from "./components/UI/IconButton";
import ManagePost from "./screens/board/ManagePost";
import Button from "./components/UI/post/Button";
import AuthContextProvider, { AuthContext } from "./store/member/Auth-Context";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTab() {
  const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      screenOptions={(navigation) => ({
        headerStyle: { backgroundColor: Colors.primary500 },
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarActiveTintColor: Colors.accent500,
      })}
    >
      <BottomTabs.Screen
        name="board"
        component={PostList}
        options={{
          title: "커뮤니티",
          tabBarLabel: "커뮤니티",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" color={color} size={size} />
          ),
          headerRight: ({ color }) => (
            <IconButton
              icon="create-outline"
              size={24}
              color={color}
              onPress={() => {
                navigation.navigate("ManagePost");
              }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="myPage"
        component={MyPage}
        options={{
          title: "마이페이지",
          tabBarLabel: "마이페이지",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

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
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

function Root() {
  const [isTryingLogin, setIsTryigLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryigLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}
function Navigation() {
  async function register() {
    const url = `http://43.201.194.56/api/v1/board`;

    const response = await axios.post(url, {
      id: "itsmesunky@gmail.com",
      password: "Password12!",
      title: "test",
      content: "content",
    });

    console.log(response.data);
    return response.data;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManagePost"
          component={ManagePost}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontFamily: "Pretendard-Medium",
            },
            headerTintColor: "black",
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerRight: ({ color, size }) => (
              <Button onPress={register}>등록</Button>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Light": require("./assets/font/Pretendard-Light.ttf"),
    "Pretendard-Medium": require("./assets/font/Pretendard-Medium.ttf"),
    "Pretendard-Semibold": require("./assets/font/Pretendard-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthContextProvider>
      <StatusBar style="dark" />
      <Root />
    </AuthContextProvider>
  );
}
