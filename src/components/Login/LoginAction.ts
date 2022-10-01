import { useRouter } from "next/router";
import axios from "../../utils/axios";
import { useToastHook } from "@/components/Toast";

export default function LoginAction() {
  const router = useRouter();
  const [, newToast] = useToastHook();
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error;
    return Object(error);
  };

  const loginRequest = async (username: string, password: string) => {
    try {
      const response = await axios.post("/admin/login", {
        username,
        password,
      });
      if (response?.status === 200) {
        newToast({ message: response.data.msg, status: "success" });
        router.push("/");
      } else {
        newToast({ message: response.data.msg, status: "error" });
      }
      return response;
    } catch (error) {
      const err = getErrorMessage(error);
      newToast({ message: err.message, status: "error" });
      return err.response;
    }
  };

  return { loginRequest };
}
