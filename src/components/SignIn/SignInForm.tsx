import { Button, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useSignIn from "./useSignIn";

type FormData = {
  username: string;
  password: string;
};

const SignInForm = () => {
  const { isLoading, handleSignInSubmit } = useSignIn();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const formSubmit = (data: { username: string; password: string }) => {
    handleSignInSubmit(data);
  };

  return (
    <form style={{ height: "400px", width: "360px" }} onSubmit={handleSubmit(formSubmit)}>
      <FormLabel fontWeight="600">Username</FormLabel>
      <Input
        role="username"
        type="email"
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
        role="signIn"
        variant={"signInBtn"}
        marginTop="48px"
        type="submit"
        isLoading={isLoading}
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
