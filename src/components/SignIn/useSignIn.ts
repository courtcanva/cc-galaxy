import axios from "../../utils/axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();
  const signInRequest = async (username: string, password: string) => {
    const response = await axios.post("/staff/signin", {
      username,
      password,
    });
    return response;
  };
  const handleSignInSubmit = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await signInRequest(data.username, data.password);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      toast({
        title: "sign in failed",
        description: "username and password is not authenticated",
        status: "error",
        duration: 6000,
        position: "top",
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return { isLoading, handleSignInSubmit };
}
