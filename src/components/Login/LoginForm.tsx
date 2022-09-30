import { Button, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import loginAction from "./LoginAction";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginRequest } = loginAction();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    handleUserLogin(data);
  });

  const handleUserLogin = async (data: { username: string; password: string }) => {
    setIsLoading(true);
    const loginResponse = await loginRequest(data.username, data.password);
    if (loginResponse?.status == 200) {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <form style={{ height: "400px", width: "360px" }} onSubmit={onSubmit}>
      <FormLabel fontWeight="600">Email</FormLabel>
      <Input
        type="email"
        {...register("username", {
          required: "This is required input",
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
        type="password"
        {...register("password", {
          required: "This is required input",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
      />
      <Button variant={"loginBtn"} marginTop="32px" type="submit" isLoading={isLoading}>
        Login in
      </Button>
    </form>
  );
};

export default LoginForm;
