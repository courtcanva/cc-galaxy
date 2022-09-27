import { api } from "@/utils/axios";
import { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";

export interface AxiosResponse<T = object> {
  data: object;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: never;
}

export default function SignUpActions() {
  const router = useRouter();
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error;
    return Object(error);
  };

  const checkEmailRequest = async (email: string) => {
    try {
      const response: AxiosResponse = await api("/admin/signUp/checkEmail", {
        method: "get",
        requestData: { email },
      });
      if (typeof window !== "undefined") router.push("/");
      return response;
    } catch (error) {
      if (typeof window !== "undefined") router.push("/login");
      const err = getErrorMessage(error);
      return err.response;
    }
  };

  return { checkEmailRequest, getErrorMessage };
}
