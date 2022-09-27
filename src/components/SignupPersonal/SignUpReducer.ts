import { z } from "zod";

// https://stackoverflow.com/a/54061487
// https://github.com/Microsoft/TypeScript/pull/29510
const stateList = ["QLD", "VIC", "NSW", "NT", "SA", "ACT", "TAS", "WA"] as const;
type StateList = typeof stateList[number];

export enum FormActionKind {
  HANDLE_SIGNUP_INPUT = "HANDLE SIGNUP INPUT",
}

export interface FormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  residentialAddress: string;
  postcode: number | null;
  state: null | StateList;
}

export const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  postcode: null,
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

export const PersonalInfoSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  postcode: z.number().positive().max(9999).min(100),
  state: z.enum(stateList),
  residentialAddress: z.string(),
});

interface FormAction {
  type: FormActionKind | null;
  field: string;
  payload: string;
}

export default function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case FormActionKind.HANDLE_SIGNUP_INPUT:
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}
