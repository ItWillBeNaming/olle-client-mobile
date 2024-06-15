import { StyleSheet, TextInput, View } from "react-native";
import Title from "./../UI/member/Title";
import AuthForm from "./AuthForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function AuthContent({ isLogin }) {
  let title = isLogin ? "로그인" : "회원가입";

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Title>{title}</Title>
        <AuthForm isLogin={isLogin} />
      </View>
    </KeyboardAwareScrollView>
  );
}
export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
});
