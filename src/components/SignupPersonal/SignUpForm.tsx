import React, { useReducer, useState } from "react";
import { Textarea, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import SignUpReducer, { initialFormState } from "@/components/SignupPersonal/SignUpReducer";
import SignUpAction from "./SignUpAction";
import { SignUpFormProps } from "./SignUpFormProps";
import { FormActionKind, fieldNameMap } from "@/components/SignupPersonal/SignUpReducer";
import _ from "lodash";

const SignUpForm = ({ loginStatus }: SignUpFormProps) => {
  const [formState, dispatch] = useReducer(SignUpReducer, initialFormState, (s: any): any => s);
  const [isSignUpFail, setIsSignUpFail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signUpRequest } = SignUpAction();
  const { firstName, lastName, phoneNumber, residentialAddress, postcode, state } = formState;
  const isInvalid =
    !firstName || !lastName || !phoneNumber || !residentialAddress || !postcode || !state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: FormActionKind.HANDLE_SIGNUP_INPUT,
      field: e.target.name,
      payload: e.target.value.trim(),
    });
  };

  return (
    <form>
      <FormControl isInvalid={isSignUpFail}>
        {_.keys(initialFormState).map((val, idx) => {
          // type casting
          // see: https://stackoverflow.com/a/64136988
          const properFieldName = fieldNameMap[val as keyof typeof fieldNameMap];
          return (
            <>
              <FormLabel htmlFor={`${val}${idx}`} key={"label " + idx} id={`label ${idx}`}>
                {properFieldName}
              </FormLabel>
              {val === "residentialAddress" ? (
                <Textarea
                  onChange={handleChange}
                  id={`${val}${idx}`}
                  name={properFieldName}
                  size="sm"
                  width="360px"
                  placeholder={`Enter ${properFieldName}`}
                  key={"input " + idx}
                ></Textarea>
              ) : (
                <Input
                  onChange={handleChange}
                  id={`${val}${idx}`}
                  type={["email", "password"].includes(val) ? val : "text"}
                  name={properFieldName}
                  size="sm"
                  width="360px"
                  placeholder={`Enter ${properFieldName}`}
                  key={"input " + idx}
                />
              )}
            </>
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
