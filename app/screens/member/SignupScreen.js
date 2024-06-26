import { Pressable, StyleSheet, Text, View } from "react-native";
import { autenticate } from "../../util/member/Auth";

function SignupScreen() {
  return (
    <View style={styles.root}>
      <Pressable onPress={autenticate}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
