import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./../../store/member/Auth-Context";
import { login } from "../../util/member/Auth";
import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login("itsmesunky@gmail.com", "Password12!");
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("인증 실패", "ID/PW를 확인하세요");
      setIsAuthenticating(false);
    }
  }

  async function confirmToken() {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
  }

  return (
    <View style={styles.root}>
      <Pressable onPress={confirmToken}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
