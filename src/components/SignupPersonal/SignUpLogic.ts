import { z } from "zod";
import { phoneNumberRegex, postcodeRegex } from "./constants/constants";

// https://stackoverflow.com/a/54061487
// https://github.com/Microsoft/TypeScript/pull/29510
export const stateList = ["QLD", "VIC", "NSW", "NT", "SA", "ACT", "TAS", "WA"] as const;
type StateList = typeof stateList[number];

export const docTypeList = ["Driver's License", "Passport"] as const;
type DocTypeList = typeof docTypeList[number];

export interface FormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  docType: null | DocTypeList;
  fileUpload: string;
  residentialAddress: string;
  postcode: string;
  state: null | StateList;
}

export const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  docType: null,
  fileUpload: "",
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
  docType: "Director identification document",
  fileUpload: "",
  postcode: "Postcode",
  state: "State (AU only)",
  residentialAddress: "Residential Address",
};

export const fieldPlaceholderMap: FieldMap = {
  firstName: "Enter your first Name",
  lastName: "Enter your last Name",
  phoneNumber: "Phone No.",
  docType: "Choose type of ID",
  fileUpload: "Upload file",
  postcode: "Enter postcode",
  state: "Choose state",
  residentialAddress: "Residential address details",
};

const requiredErrorMsg = "This field is required";
export const PersonalInfoSchema = z.object({
  firstName: z
    .string({ required_error: requiredErrorMsg })
    .min(1, { message: "First name must contain at least 1 character(s)" }),
  lastName: z
    .string({ required_error: requiredErrorMsg })
    .min(1, { message: "Last name must contain at least 1 character(s)" }),
  phoneNumber: z.string({ required_error: requiredErrorMsg }).regex(phoneNumberRegex, {
    message: "The Phone Number does not match required format. Example: 0411111111",
  }),
  docType: z.enum(docTypeList, { required_error: requiredErrorMsg }),
  postcode: z.string({ required_error: requiredErrorMsg }).regex(postcodeRegex, {
    message: "The Postcode does not match the required format. Example: 4000",
  }),
  state: z.enum(stateList, {
    required_error: requiredErrorMsg,
  }),
  residentialAddress: z
    .string({ required_error: requiredErrorMsg })
    .min(10, { message: "You need to provide a valid residential address" }),
});
