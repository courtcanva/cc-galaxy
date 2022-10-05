import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import SignUpForm from "./SignUpForm";

import { Flex, Image } from "@chakra-ui/react";

const SignUp: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex width="100vw" justifyContent="center" alignItems="center">
        <Flex width="51vw" zIndex="9" alignSelf="stretch">
          <Image width="51vw" src="./login/login-image.png" alt="login-image" objectFit="cover" />
        </Flex>
        <Flex
          width="51vw"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          background="white"
          zIndex="10"
          alignSelf="stretch"
        >
          <SignUpForm />
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};
export default SignUp;
