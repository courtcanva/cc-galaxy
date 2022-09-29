import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import SignUp from "../components/SignUp/index";
import { Box } from "@chakra-ui/react";

const SignUpPage: NextPage = () => {
  return (
    <HeaderLayout>
      <Box as="main">
        <SignUp />
      </Box>
    </HeaderLayout>
  );
};

export default SignUpPage;
