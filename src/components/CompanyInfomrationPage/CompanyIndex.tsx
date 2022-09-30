import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import SignUpForm from "./SignUpForm";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SignUp: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex
        width="100vw"
        paddingTop="5vh"
        paddingBottom="5vh"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(116.82deg, #124458 0%, rgba(108, 150, 183, 0.9) 100%)"
      >
        <Flex width="87vw" justifyContent="center" alignItems="center">
          <Flex zIndex="9" width="44vw" alignSelf="stretch">
            <Image src="./login/login-image.png" alt="login-image" objectFit="cover" />
          </Flex>
          <Flex
            width="44vw"
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
      </Flex>
    </HeaderLayout>
  );
};
export default SignUp;