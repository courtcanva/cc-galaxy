import { z } from "zod";
import { phoneNumberRegex, postcodeRegex } from "./constants/constants";

// https://stackoverflow.com/a/54061487
// https://github.com/Microsoft/TypeScript/pull/29510
export const stateList = ["QLD", "VIC", "NSW", "NT", "SA", "ACT", "TAS", "WA"] as const;
type StateList = typeof stateList[number];

export interface FormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  residentialAddress: string;
  postcode: string;
  state: null | StateList;
}

export const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  postcode: "",
  state: null,
  residentialAddress: "",
};

// use `as string` to lock the type of the key to be string
// otherwise there will be a warning in SignUpForm.tsx in the following line
// const properFieldName = fieldNameMap[val];
type FieldMap = { [P in keyof FormState]: string };
export const fieldNameMap: FieldMap = {
  firstName: "First Name",
  lastName: "Last Name",
  phoneNumber: "Phone number",
  postcode: "Postcode",
  state: "State",
  residentialAddress: "Residential Address",
};

const requiredErrorMsg = "This field is required";
export const PersonalInfoSchema = z.object({
  firstName: z.string({ required_error: requiredErrorMsg }).min(1),
  lastName: z.string({ required_error: requiredErrorMsg }).min(1),
  phoneNumber: z
    .string({ required_error: requiredErrorMsg })
    .regex(phoneNumberRegex, { message: "The Phone Number does not match required format" }),
  postcode: z
    .string({ required_error: requiredErrorMsg })
    .regex(postcodeRegex, { message: "The Postcode does not match the required format" }),
  state: z.enum(stateList, { required_error: requiredErrorMsg }),
  residentialAddress: z.string({ required_error: requiredErrorMsg }),
});
