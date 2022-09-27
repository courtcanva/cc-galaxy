import React from "react";
import HeaderLayout from "@/layouts/HeaderLayout";
import SignUpForm from "./SignUpForm";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SignUp: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex width="100vw" height="100vh" alignItems="center" background="#114458">
        <Flex justifyContent="center" alignItems="center" position="relative">
          <Box
            width="1280px"
            height="710px"
            background="background.secondary"
            position="absolute"
            transform="rotate(-3deg)"
          />

          <Image
            src="./login/login-image.png"
            zIndex="10"
            alt="login-image"
            transform="translateX(-5px)"
          />

          <Flex
            width="629px"
            height="682px"
            flexDir="column"
            alignItems="center"
            justifyContent="space-around"
            background="white"
            zIndex="10"
          >
            <Flex flexDir="column" alignItems="center" marginTop="50px">
              <Image boxSize="64px" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
              <Text marginTop="10px" color="brand.secondary">
                CourtCanva
              </Text>
            </Flex>

            <Flex alignItems="flex-start">
              <Text>Please fill in your personal information</Text>
            </Flex>

            <Flex>
              <SignUpForm loginStatus={() => true} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default SignUp;
