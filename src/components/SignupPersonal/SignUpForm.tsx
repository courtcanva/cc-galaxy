import React, { useReducer, useState } from "react";
import { Textarea, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import SignUpReducer, {
  initialFormState,
  FormState,
} from "@/components/SignupPersonal/SignUpReducer";
import SignUpAction from "./SignUpAction";
import { SignUpFormProps } from "./SignUpFormProps";
import {
  FormActionKind,
  fieldNameMap,
  PersonalInfoSchema,
} from "@/components/SignupPersonal/SignUpReducer";
import { useForm, SubmitHandler } from "react-hook-form";
import AlertPop from "../Common/AlertPop";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = ({ loginStatus }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormState>({ resolver: zodResolver(PersonalInfoSchema) });

  const onSubmit: SubmitHandler<FormState> = (data) => console.log(data);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={isSignUpFail}>
        {Object.keys(initialFormState).map((val, idx) => {
          // type casting
          // see: https://stackoverflow.com/a/64136988
          const properFieldName = fieldNameMap[val as keyof typeof fieldNameMap];
          return (
            <>
              <FormLabel htmlFor={`${val}${idx}`} key={"label " + idx} id={`label ${idx}`}>
                {properFieldName}
              </FormLabel>
              {val && val === "residentialAddress" ? (
                <Textarea
                  id={`${val}${idx}`}
                  size="sm"
                  width="360px"
                  placeholder={`Enter ${properFieldName}`}
                  key={"input " + idx}
                  {...register(val as keyof FormState, {
                    onChange: handleChange,
                  })}
                ></Textarea>
              ) : (
                <Input
                  id={`${val}${idx}`}
                  type={["email", "password"].includes(val) ? val : "text"}
                  size="sm"
                  width="360px"
                  placeholder={`Enter ${properFieldName}`}
                  key={"input " + idx}
                  {...register(val as keyof FormState, {
                    onChange: handleChange,
                  })}
                />
              )}
              {errors[val as keyof FormState] && (
                <AlertPop title={errors[val as keyof FormState]!.message || "Input error"} />
              )}
            </>
          );
        })}
      </FormControl>

      <Button type="submit" disabled={isInvalid} isLoading={isLoading}>
        Sign up
      </Button>
      <input type="submit" />
    </form>
  );
};

export default SignUpForm;
