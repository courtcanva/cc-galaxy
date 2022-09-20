import React, { useState } from "react";
import HeaderLayout from "@/layouts/HeaderLayout";
import SignUpForm from "./SignUpForm";

const SignUp: React.FC = () => {
  return <SignUpForm loginStatus={() => true} />;
};

export default SignUp;
