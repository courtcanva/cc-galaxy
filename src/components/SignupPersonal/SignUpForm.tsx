import React from "react";
import { Container, FormControl, FormLabel, Textarea, Input, Select } from "@chakra-ui/react";
import { FormState } from "@/components/SignupPersonal/SignUpLogic";
import { SignUpFormProps } from "./SignUpFormProps";
import {
  fieldNameMap,
  fieldPlaceholderMap,
  PersonalInfoSchema,
  stateList,
} from "@/components/SignupPersonal/SignUpLogic";
import { useForm } from "react-hook-form";
import AlertPop from "../Common/AlertPop";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = ({ isLoggedIn, onSubmit }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormState>({ resolver: zodResolver(PersonalInfoSchema) });
  watch();
  const getErrorMsg = (errs: typeof errors, fieldName: keyof FormState) => {
    return errs[fieldName] && <AlertPop title={errs[fieldName]?.message || "Input error"} />;
  };

  const fieldContainerWidth = "40vw";
  return isLoggedIn ? (
    <p>You have already logged in</p>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} role={"form"}>
      <FormControl>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`firstName`}>{fieldNameMap["firstName"]}</FormLabel>
          <Input
            id="firstName"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["firstName"]}
            {...register("firstName")}
          ></Input>
          {getErrorMsg(errors, "firstName")}
        </Container>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`lastName`}>{fieldNameMap["lastName"]}</FormLabel>
          <Input
            id="lastName"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["lastName"]}
            {...register("lastName")}
          ></Input>
          {getErrorMsg(errors, "lastName")}
        </Container>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`phoneNumber`}>{fieldNameMap["phoneNumber"]}</FormLabel>
          <Input
            id="phoneNumber"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["phoneNumber"]}
            {...register("phoneNumber")}
          ></Input>
          {getErrorMsg(errors, "phoneNumber")}
        </Container>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`postcode`}>{fieldNameMap["postcode"]}</FormLabel>
          <Input
            id="postcode"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["postcode"]}
            {...register("postcode")}
          ></Input>
          {getErrorMsg(errors, "postcode")}
        </Container>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`state`}>{fieldNameMap["state"]}</FormLabel>
          <Select
            id="state"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["state"]}
            {...register("state")}
          >
            {stateList.map((s: string) => (
              <option key={`opt${s}`} value={s}>
                {s}
              </option>
            ))}
          </Select>
          {getErrorMsg(errors, "state")}
        </Container>
        <Container width={fieldContainerWidth}>
          <FormLabel htmlFor={`residentialAddress`}>{fieldNameMap["residentialAddress"]}</FormLabel>
          <Textarea
            id="residentialAddress"
            size="sm"
            width="100%"
            placeholder={fieldPlaceholderMap["residentialAddress"]}
            {...register("residentialAddress")}
          ></Textarea>
          {getErrorMsg(errors, "residentialAddress")}
        </Container>
      </FormControl>
    </form>
  );
};

export default SignUpForm;
