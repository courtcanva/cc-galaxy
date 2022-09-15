export enum FormActionKind {
  HANDLE_LOGIN_INPUT = "HANDLE LOGIN INPUT",
}

interface FromState {
  userEmail: string;
  userPassword: string;
}

interface FormAction {
  type: FormActionKind | null;
  field: string;
  payload: string;
}

export default function formReducer(state: FromState, action: FormAction) {
  switch (action.type) {
    case FormActionKind.HANDLE_LOGIN_INPUT:
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}
