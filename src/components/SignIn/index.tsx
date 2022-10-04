import React from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import SignInForm from "./SignInForm";

import { Flex, Image, Text } from "@chakra-ui/react";

const SignIn: React.FC = () => {
  return (
    <HeaderLayout>
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Flex width="100%" flexDir="column" alignItems="center">
          <Flex flexDir="column" alignItems="center">
            <Image boxSize="104px" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
            <Text fontSize="24" marginTop="24px" color="brand.secondary">
              CourtCanva
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Text fontSize="20" marginTop="24px" marginBottom="48px" fontWeight="700">
              Sign in to CourtCanva Franchisee
            </Text>
          </Flex>
          <Flex>
            <SignInForm />
          </Flex>
        </Flex>
        <Flex width="40%">
          <Image
            height="100vh"
            objectFit="cover"
            src="./signIn/signIn-image.png"
            alt="signIn-image"
          />
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default SignIn;
