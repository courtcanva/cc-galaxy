import axios from "../../utils/axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const handleSignInSubmit = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/staff/signin", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 400) {
        toast({
          title: "Sign in failed",
          description: "Username and password is not authenticated",
          status: "error",
          duration: 6000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: err.message,
          status: "error",
          duration: 6000,
          position: "top",
          isClosable: true,
        });
      }
    }
    setIsLoading(false);
  };

  return { isLoading, handleSignInSubmit };
}
