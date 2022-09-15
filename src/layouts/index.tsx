import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex as="header" width="full" align="center">
        <Box marginLeft="auto" marginTop={5} marginRight={5}>
        </Box>
      </Flex>
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};
export default Layout;
