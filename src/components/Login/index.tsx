import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import LoginForm from "./LoginForm";

import { Flex, Image, Text } from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        background="#114458"
      >
        <Flex justifyContent="center" alignItems="center" position="relative">
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

            <Flex flexDir="column" alignItems="center">
              <Text fontSize="xl" fontWeight="700">
                Log in to CourtCanva Admin
              </Text>
            </Flex>

            <Flex>
              <LoginForm />
            </Flex>
          </Flex>

          <Image
            src="./login/login-image.png"
            zIndex="10"
            alt="login-image"
            transform="translateX(-5px)"
          />
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default Login;
