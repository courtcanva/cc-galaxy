import React, { useReducer, useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import SignUpReducer, { initialFormState } from "@/components/SignupPersonal/SignUpReducer";
import SignUpAction from "./SignUpAction";

interface SignUpFormProps {
  // a function with boolean param arg0 that returns boolean or void
  loginStatus: (arg0: boolean) => boolean | void;
}

const SignUpForm = ({ loginStatus }: SignUpFormProps) => {
  const { signUpProps } = initialFormState;
  const [formState, dispatch] = useReducer(SignUpReducer, initialFormState);
  const [isSignUpFail, setIsSignUpFail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signUpRequest } = SignUpAction();
  const {
    firstName,
    lastName,
    franchiseAbn,
    email,
    phoneNumber,
    residentialAddress,
    postcode,
    state,
    password,
  } = formState;
  const isInvalid =
    !firstName ||
    !lastName ||
    !franchiseAbn ||
    !email ||
    !phoneNumber ||
    !residentialAddress ||
    !postcode ||
    !state ||
    !password;

  return (
    <form>
      <FormControl isInvalid={isSignUpFail}>
        <FormLabel htmlFor="email" fontWeight="600">
          Email
        </FormLabel>
        <Input type="email" name="email" size="md" width="360px" placeholder="Enter Email" />
        <FormLabel htmlFor="password" fontWeight="600">
          Password
        </FormLabel>
        <Input
          type="password"
          name="password"
          size="md"
          width="360px"
          placeholder="Enter Password"
        />
      </FormControl>
      <Button type="submit" disabled={isInvalid} isLoading={isLoading}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
