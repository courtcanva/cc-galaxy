import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import loginAction from "./LoginAction";
import { useRouter } from "next/router";
import { useToastHook } from "@/components/Toast";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [, newToast] = useToastHook();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginRequest } = loginAction();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const formSubmit = handleSubmit((data) => {
    userLogin(data);
  });

  const userLogin = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    const response = await loginRequest(data.username, data.password);
    if (response?.status === 200) {
      newToast({ message: response.data, status: "success" });
      router.push("/");
    } else {
      newToast({ message: response.data, status: "error" });
    }
    setIsLoading(false);
  };

  return (
    <form style={{ height: "400px", width: "360px" }} onSubmit={formSubmit}>
      <FormLabel fontWeight="600">Username</FormLabel>
      <Input
        role="username"
        type="username"
        {...register("username", {
          required: "Username is required",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="username"
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
      <FormLabel marginTop="24px" fontWeight="600">
        Password
      </FormLabel>
      <Input
        role="password"
        type="password"
        {...register("password", {
          required: "Password is required",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
      <Button
        role="login"
        variant={"loginBtn"}
        marginTop="32px"
        type="submit"
        isLoading={isLoading}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
