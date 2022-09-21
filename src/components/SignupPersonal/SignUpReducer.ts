export enum FormActionKind {
  HANDLE_SIGNUP_INPUT = "HANDLE SIGNUP INPUT",
}

interface FormState {
  firstName: string;
  lastName: string;
  franchiseAbn: string;
  email: string;
  phoneNumber: string;
  // there seems to be some discrepancy between frontend and backend
  residentialAddress: string;
  postcode: number;
  state: string;
  password: string;
}

export const initialFormState = {
  signUpProps: {
    firstName: "",
    lastName: "",
    franchiseAbn: "",
    email: "",
    phoneNumber: "",
    residentialAddress: "",
    postcode: "",
    state: "",
    password: "",
  },
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
