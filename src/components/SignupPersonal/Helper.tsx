import { Textarea, Input, Select, Button, FormControl, FormLabel } from "@chakra-ui/react";

const htmlElementMapping = {
  residentialAddress: Textarea,
  state: Select,
};

export const getHtmlElementMapping = (fieldName: string) => {
  return htmlElementMapping[fieldName as keyof typeof htmlElementMapping] || Input;
};
