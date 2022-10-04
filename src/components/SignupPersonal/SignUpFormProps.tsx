import { SubmitHandler } from "react-hook-form";
import { FormState } from "./SignUpLogic";

export interface SignUpFormProps {
  isLoggedIn: boolean | void;
  onSubmit: SubmitHandler<FormState>;
}
