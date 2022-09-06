import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { fonts } from "./fonts";
import { colors } from "./colors";
import { config } from "./config";
import { components } from "./components";

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.800" : "orange.50",
      },
    }),
  },
};

const customTheme = extendTheme({
  styles,
  fonts,
  colors,
  config,
  components,
});

export default customTheme;
