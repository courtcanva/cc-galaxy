export enum FormActionKind {
  HANDLE_SIGNUP_INPUT = "HANDLE SIGNUP INPUT",
}

interface FormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  residentialAddress: string;
  postcode: number | null;
  state: "QLD" | "VIC" | "NSW" | "NT" | "SA" | "ACT" | "TAS" | "WA" | null;
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
