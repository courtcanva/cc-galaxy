export enum FormActionKind {
  HANDLE_SIGNUP_INPUT = "HANDLE SIGNUP INPUT",
}

interface FormState {
  firstName;
  lastName;
  franchiseAbn;
  email;
  phoneNumber;
  residentialAddress;
  postcode;
  state;
  password;
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
