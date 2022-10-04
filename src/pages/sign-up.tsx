import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import { Box } from "@chakra-ui/react";
import SignUpPersonal from "../components/SignupPersonal/index";

const SignUpPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Box as="main">
        <SignUpPersonal />
      </Box>
    </HeaderLayout>
  );
};

export default SignUpPage;
