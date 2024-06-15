import { Image, StyleSheet, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import SocialLoginButton from "../UI/member/SocialLoginButton";
import { useNavigation } from "@react-navigation/native";

const appleImage = require("../.././assets/social-login/Apple.png");
const googleImage = require("../.././assets/social-login/Google.png");
const kakaoImage = require("../.././assets/social-login/Kakao.png");
const naverImage = require("../.././assets/social-login/Naver.png");

function AuthForm({ isLogin }) {
  const navigation = useNavigation();
  function SignupHandler() {
    navigation.navigate("Signup");
  }

  return (
    <>
      <Input keyboardType="email-address" placeholder="이메일을 입력해주세요" />
      <Input
        placeholder="비밀번호를 입력해주세요"
        textContentType="oneTimeCode"
        secure
        returnKeyType="next"
      />
      {!isLogin && (
        <Input
          placeholder="비밀번호를 다시 입력해주세요"
          textContentType="oneTimeCode"
          secure
          returnKeyType="next"
        />
      )}
      <Button>{isLogin ? "로그인 하기" : "회원가입 하기"}</Button>
      {isLogin && (
        <>
          <View style={styles.iconContainer}>
            <SocialLoginButton source={appleImage} />
            <SocialLoginButton source={googleImage} />
            <SocialLoginButton source={kakaoImage} />
            <SocialLoginButton source={naverImage} />
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={SignupHandler}>
              이메일로 가입하기
            </Button>
          </View>
        </>
      )}
    </>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    paddingLeft: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 15,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "white",
  },
});
