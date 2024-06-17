import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import SocialLoginButton from "../UI/member/SocialLoginButton";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../constants/Schema";

const appleImage = require("../.././assets/social-login/Apple.png");
const googleImage = require("../.././assets/social-login/Google.png");
const kakaoImage = require("../.././assets/social-login/Kakao.png");
const naverImage = require("../.././assets/social-login/Naver.png");

function AuthForm({ isLogin }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigation = useNavigation();
  function SignupHandler() {
    navigation.navigate("Signup");
  }

  const onPressSend = (formData) => {
    console.log("hello");
  };

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            keyboardType="email-address"
            placeholder="이메일을 입력해주세요"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="비밀번호를 입력해주세요"
            textContentType="oneTimeCode"
            secure
            returnKeyType="next"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Button onPress={handleSubmit(onPressSend)}>
        {isLogin ? "로그인 하기" : "회원가입 하기"}
      </Button>
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
