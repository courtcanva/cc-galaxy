import type { NextPage } from "next";
import HeaderLayout from "../layouts/HeaderLayout";
import { Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <HeaderLayout>
      <Heading as="h1" size="xl" textAlign="center">
        Welcome to CourtCanva
      </Heading>
    </HeaderLayout>
  );
};

export default Home;
