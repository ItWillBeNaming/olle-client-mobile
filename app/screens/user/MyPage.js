import { useState } from "react";
import MyPage from "../../components/user/MyPage";
import LoginScreen from "../member/LoginScreen";

function MyPageScreen() {
  // 로그인 여부에 따라 다른 화면 출력
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 정보 가져오기

  return isLogin ? <MyPage /> : <LoginScreen />;
}

export default MyPageScreen;
