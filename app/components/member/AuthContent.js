import { StyleSheet, View } from "react-native";
import Title from "./../UI/member/Title";

function AuthContent({ isLogin }) {
  let title = isLogin ? "로그인" : "회원가입";

  return (
    <View style={styles.container}>
      <Title>{title}</Title>
    </View>
  );
}
export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
