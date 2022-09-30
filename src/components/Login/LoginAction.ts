import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { api } from "../../utils/axios";

export default function LoginAction() {
  const toast = useToast();
  const router = useRouter();
  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error;
    return Object(error);
  };

  const loginRequest = async (email: string, password: string) => {
    try {
      const response = await api("/admin/login", {
        method: "post",
        requestData: { email, password },
      });
      if (response?.status === 200) {
        toast({
          position: "top",
          title: "Login success",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/");
      } else {
        toast({
          position: "top",
          title: "Login Error",
          description: "...",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      return response;
    } catch (error) {
      const err = getErrorMessage(error);
      toast({
        position: "top",
        title: "Network Error",
        description: err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return err.response;
    }
  };

  return { loginRequest };
}
