import React from "react";
import SignUpForm from "./SignUpForm";

const SignUpPersonal: React.FC = () => {
  return <SignUpForm isLoggedIn={false} onSubmit={(data) => console.log(data)} />;
};

export default SignUpPersonal;
