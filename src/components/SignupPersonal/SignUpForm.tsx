import React, { useReducer, useState } from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

interface SignUpFormProps {
  // a function with boolean param arg0 that returns boolean or void
  loginStatus: (arg0: boolean) => boolean | void;
}

const SignUpForm = ({ loginStatus }: SignUpFormProps) => {
  const { loginProps } = initialFormState;
};
