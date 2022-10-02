import axios from "../../utils/axios";

export default function LoginAction() {
  const loginRequest = async (username: string, password: string) => {
    const response = await axios.post("/admin/login", {
      username,
      password,
    });
    return response;
  };

  return { loginRequest };
}
