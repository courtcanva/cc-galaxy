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
          <Flex width="47vw" alignSelf="stretch">
            <Image
            src="./login/login-image.png"
            zIndex="9"
            alt="login-image"
            transform="translateX(1vw)"
            objectFit="cover"
            />
          </Flex>
          <Flex
            width="47vw"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            background="white"
            zIndex="10"
            transform="translateX(-1vw)"
            alignSelf="stretch"
          >
            <SignUpForm />
          </Flex>
      </Flex>
    </HeaderLayout>
  );
};
export default SignUp;
