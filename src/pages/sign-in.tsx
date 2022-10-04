import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import SignIn from "../components/SignIn/index";
import { Box } from "@chakra-ui/react";

const SignInPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Box as="main">
        <SignIn />
      </Box>
    </HeaderLayout>
  );
};

export default SignInPage;
