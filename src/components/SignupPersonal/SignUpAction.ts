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
export interface Staff {
  firstName: string;
  lastName: string;
  franchiseAbn: string;
  email: string;
  phoneNumber: string;
  residentialAddress: string;
  postcode: number;
  state: string;
  password: string;
}

export default function SignUpAction() {
  const router = useRouter();
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error;
    return Object(error);
  };

  const signUpRequest = async ({
    firstName,
    lastName,
    franchiseAbn,
    email,
    phoneNumber,
    residentialAddress,
    postcode,
    state,
    password,
  }: Staff) => {
    try {
      const response: AxiosResponse = await api("/admin/signup", {
        method: "post",
        requestData: {
          firstName,
          lastName,
          franchiseAbn,
          email,
          phoneNumber,
          residentialAddress,
          postcode,
          state,
          password,
        },
      });
      if (typeof window !== "undefined") router.push("/");
      return response;
    } catch (error) {
      if (typeof window !== "undefined") router.push("/signup");
      const err = getErrorMessage(error);
      return err.response;
    }
  };

  return { signUpRequest, getErrorMessage };
}
