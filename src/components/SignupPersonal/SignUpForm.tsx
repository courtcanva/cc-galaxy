import React from "react";
import { Container, FormControl, FormLabel } from "@chakra-ui/react";
import { initialFormState, FormState } from "@/components/SignupPersonal/SignUpLogic";
import { SignUpFormProps } from "./SignUpFormProps";
import { fieldNameMap, PersonalInfoSchema } from "@/components/SignupPersonal/SignUpLogic";
import { getHtmlElementMapping } from "./Helper";
import { useForm, SubmitHandler } from "react-hook-form";
import AlertPop from "../Common/AlertPop";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = ({ isLoggedIn }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormState>({ resolver: zodResolver(PersonalInfoSchema) });
  watch();

  const onSubmit: SubmitHandler<FormState> = (data) => console.log(data);

  return isLoggedIn ? (
    <p>You have already logged in</p>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} role={"form"}>
      <FormControl>
        {Object.keys(initialFormState).map((val, idx) => {
          // type casting
          // see: https://stackoverflow.com/a/64136988
          const properFieldName = fieldNameMap[val as keyof typeof fieldNameMap];
          const elemRenderer = getHtmlElementMapping(val);
          return (
            <Container key={`div-${idx}`} width={"40vw"}>
              <FormLabel htmlFor={`${val}${idx}`} key={"label " + idx} id={`label ${idx}`}>
                {properFieldName}
              </FormLabel>
              {val &&
                elemRenderer({
                  id: `${val}${idx}`,
                  size: "sm",
                  width: "100%",
                  placeholder: `Enter ${properFieldName}`,
                  key: "input " + idx,
                  ...register(val as keyof FormState, {}),
                })}
              {errors[val as keyof FormState] && (
                // use ? instead of ! so that eslint won't complain
                <AlertPop title={errors[val as keyof FormState]?.message || "Input error"} />
              )}
            </Container>
          );
        })}
      </FormControl>
    </form>
  );
};

export default SignUpForm;
