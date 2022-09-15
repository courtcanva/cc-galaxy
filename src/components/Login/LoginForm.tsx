import React, { useReducer, useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import LoginReducer, { FormActionKind, initialFormState } from "@/components/Login/LoginReducer";
import UserTokenService from "@/components/TokenService";
import loginAction from "./LoginAction";

interface LoginFromProps {
  loginStatus: (arg0: boolean) => boolean | void;
}

const LoginForm = ({ loginStatus }: LoginFromProps) => {
  const { loginProps } = initialFormState;
  const [state, dispatch] = useReducer(LoginReducer, loginProps);
  const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginRequest } = loginAction();
  const { email, password } = state;
  const isInvalid = !email || !password;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoginFail(false);
    loginStatus(false);
    dispatch({
      type: FormActionKind.HANDLE_LOGIN_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  const handleUserLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoginFail(false);
    setIsLoading(true);
    const loginResponse = await loginRequest(email, password);

    if (loginResponse?.status !== 200) {
      setIsLoginFail(true);
      loginStatus(true);
      setIsLoading(false);
      return;
    }

    const tokens: object = loginResponse.data;

    UserTokenService.setUserToken(tokens);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleUserLogin}>
      <FormControl isInvalid={isLoginFail}>
        <FormLabel htmlFor="email" fontWeight="600">
          Email
        </FormLabel>
        <Input
          type="email"
          name="email"
          size="md"
          width="360px"
          placeholder="Enter Email"
          onChange={handleTextChange}
        />
      </FormControl>

      <FormControl isInvalid={isLoginFail}>
        <FormLabel htmlFor="password" fontWeight="600" marginTop="25px">
          Password
        </FormLabel>
        <Input
          type="password"
          name="password"
          size="md"
          width="360px"
          placeholder="Enter Password"
          onChange={handleTextChange}
        />
      </FormControl>

      <Button variant={"loginBtn"} type="submit" disabled={isInvalid} isLoading={isLoading}>
        Login in
      </Button>
    </form>
  );
};

export default LoginForm;
