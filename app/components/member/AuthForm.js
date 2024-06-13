import { StyleSheet, View } from "react-native";
import Input from "./Input";

function AuthForm({ isLogin }) {
  return (
    <>
      <Input keyboardType="email-address" placeholder="이메일을 입력해주세요" />
      <Input
        keyboardType="email-address"
        placeholder="비밀번호를 입력해주세요"
        secure
      />
    </>
  );
}

export default AuthForm;
