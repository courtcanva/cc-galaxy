import { ChakraProvider } from "@chakra-ui/react";
// import customTheme from "./theme";
import theme from "./theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
