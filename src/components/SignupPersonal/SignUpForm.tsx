import React, { useReducer, useState } from "react";
import { Flex, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import SignUpReducer, { initialFormState } from "@/components/SignupPersonal/SignUpReducer";
import SignUpAction from "./SignUpAction";
import { SignUpFormProps } from "./SignUpFormProps";
import { FormActionKind } from "@/components/SignupPersonal/SignUpReducer";
import _ from "lodash";

const SignUpForm = ({ loginStatus }: SignUpFormProps) => {
  const { signUpProps } = initialFormState;
  const [formState, dispatch] = useReducer(SignUpReducer, initialFormState, (s: any): any => s);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActionKind.HANDLE_SIGNUP_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  return (
    <form>
      <FormControl isInvalid={isSignUpFail}>
        {_.keys(signUpProps).map((val, idx) => {
          return (
            <Flex key={idx}>
              <FormLabel htmlFor={val} fontWeight="600" key={"label " + idx} id={"label " + idx}>
                {val}
              </FormLabel>
              <Input
                onChange={handleChange}
                id={"input " + idx}
                type={["email", "password"].includes(val) ? val : "text"}
                name={val}
                size="sm"
                width="360px"
                placeholder={"Enter " + val}
                key={"input " + idx}
              />
            </Flex>
          );
        })}
      </FormControl>
      <Button type="submit" disabled={isInvalid} isLoading={isLoading}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
