export enum FormActionKind {
  HANDLE_SIGNUP_INPUT = "HANDLE SIGNUP INPUT",
}

interface FromState {
  email: string;
  password: string;
}

export const initialFormState = {
  SignUpProps: {
    email: "",
    password: "",
  },
};

interface FormAction {
  type: FormActionKind | null;
  field: string;
  payload: string;
}

export default function formReducer(state: FromState, action: FormAction) {
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
