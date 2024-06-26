import axios from "axios";

export async function authenticate(mode, email, password) {
  const url = `http://43.201.194.56/api/v1/auth/${mode}`;

  const response = await axios.post(url, {
    title: "test",
    content: "test",
  });

  return response.data;
}

export async function login(email, password) {
  return authenticate("login", email, password);
}
