import React, { useReducer, useState } from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import SignUpReducer, { FormActionKind, initialFormState } from "@/components/SignUp/SignUpReducer";
import SignUpActions from "./SignUpAction";

interface SignUpFromProps {
  signUpStatus: (arg0: number) => number | void;
}

const SignUpFirstStep = ({ signUpStatus }: SignUpFromProps) => {
  const { SignUpProps } = initialFormState;
  const [state, dispatch] = useReducer(SignUpReducer, SignUpProps);
  const [isEmailExisted, setIsEmailExisted] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPwdValid, setIsPwdValid] = useState<boolean>(true);
  const [errEmailMsg, setErrEmailMsg] = useState<string>("");
  const { checkEmailRequest } = SignUpActions();
  const { email, password } = state;
  const checkEmail =
    /^[a-zA-Z0-9]([a-zA-Z0-9]*[-_]?[a-zA-Z0-9]+)*@([a-zA-Z0-9]*[-_]?[a-zA-Z0-9]+)+([\.][a-zA-Z0-9]+)*[\.][a-zA-Z]{2,3}([\.][a-zA-Z]{2})?$/;
  const checkPwd = /^(?![a-z]+$)[a-zA-Z]{6,12}$/;

  const handleEmailCheck = async (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!checkEmail.test(email)) {
      setErrEmailMsg("Your email's format is invalid");
      setIsEmailValid(false);
      return;
    }
    // If use cookies directly set the email, it will pass onBlur event
    setIsChecked(true);
    // const checkEmailResponse = await checkEmailRequest(email);
    // if (checkEmailResponse?.status != 200) {
    //   setIsEmailExisted(true);
    //   setErrMsg("This email is already existed");
    //   return;
    // }
  };

  const handleEmailTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(false);
    setIsEmailExisted(false);
    setIsEmailValid(true);
    dispatch({
      // Need to figure out
      type: FormActionKind.HANDLE_SIGNUP_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  const handlePwdTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwdValid(false);
    if (checkPwd.test(password)) {
      setIsPwdValid(true);
    }
    dispatch({
      // Need to figure out
      type: FormActionKind.HANDLE_SIGNUP_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
    console.log(password);
  };

  const handleClickButton = () => {
    signUpStatus(1);
  };

  return (
    <form>
      <FormControl isInvalid={!isEmailValid || isEmailExisted} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="example:123qwe@xxx.com"
          onChange={handleEmailTextChange}
          onBlur={handleEmailCheck}
        />
        {isEmailValid && !isEmailExisted ? (
          <FormHelperText>Enter the email you would like to use as username</FormHelperText>
        ) : (
          <FormErrorMessage>{errEmailMsg}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!isPwdValid} isRequired>
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" onChange={handlePwdTextChange} />
        {isPwdValid ? null : (
          <FormErrorMessage>
            Use 8 or more characters (a combination of letters, numbers and symbols)
          </FormErrorMessage>
        )}
      </FormControl>
      <Button
        colorScheme="teal"
        variant="outline"
        disabled={isEmailExisted || !isChecked || !isPwdValid}
        onClick={handleClickButton}
      >
        Go Next
      </Button>
    </form>
  );
};

export default SignUpFirstStep;
