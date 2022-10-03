import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import LoginForm from "./LoginForm";

import { Flex, Image, Text } from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Image src="./login/login-image.png" alt="login-image" />
        <Flex width="50%" flexDir="column" alignItems="center">
          <Flex flexDir="column" alignItems="center">
            <Image boxSize="64px" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
            <Text marginTop="26px" color="brand.secondary">
              CourtCanva
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Text marginTop="32px" marginBottom="40px" fontSize="xl" fontWeight="700">
              Log in to CourtCanva Franchisee
            </Text>
          </Flex>
          <Flex>
            <LoginForm />
          </Flex>
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default Login;
