import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp: React.FC = () => {
  return <SignUpForm isLoggedIn={false} onSubmit={(data) => console.log(data)} />;
};

export default SignUp;
