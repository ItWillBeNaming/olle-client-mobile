import axios from "axios";

export async function authenticate(mode, email, password) {
  const url = `http://43.201.194.56/api/v1/auth/${mode}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
  });

  return response.data.data.accessToken;
}

export async function login(email, password) {
  return authenticate("login", email, password);
}
