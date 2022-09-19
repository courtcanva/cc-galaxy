import React, { useReducer, useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import SignUpReducer, {
  FormActionKind,
  initialFormState,
} from "@/components/SignupPersonal/SignUpReducer";

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
  const [
    firstName,
    lastName,
    franchiseAbn,
    email,
    phoneNumber,
    residentialAddress,
    postcode,
    state,
    password,
  ] = formState;
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
};
