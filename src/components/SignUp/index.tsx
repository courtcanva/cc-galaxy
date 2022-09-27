import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import SignUpForm from "./SignUpForm";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SignUp: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(116.82deg, #124458 0%, rgba(108, 150, 183, 0.9) 100%)"
      >
        <Flex justifyContent="center" alignItems="center" position="relative">
          {/* <Box
            width="1280px"
            height="710px"
            background="background.secondary"
            position="absolute"
            transform="rotate(-3deg)"
          /> */}
          <Image
            src="./login/login-image.png"
            zIndex="9"
            alt="login-image"
            transform="translateX(7px)"
          />
          <Flex
            width="629px"
            height="682px"
            flexDir="column"
            alignItems="center"
            background="white"
            zIndex="10"
            transform="translateX(-7px)"
          >
            <Flex flexDir="column" alignItems="center" marginTop="50px">
              <Image boxSize="64px" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
              <Text marginTop="10px" color="brand.secondary">
                CourtCanva
              </Text>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Text lineHeight="24px" fontSize="16px" fontWeight="400">
                Register with CourtCanva as our franchisee
              </Text>
            </Flex>
            <Flex>
              <SignUpForm />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};
export default SignUp;
