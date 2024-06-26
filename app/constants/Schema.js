import * as yup from "yup";

export const Schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 형식에 맞지 않습니다."
    )
    .required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});
