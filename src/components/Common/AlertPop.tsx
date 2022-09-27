import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function AlertPop(props: { title: string }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={"auto"}>{props.title}</AlertTitle>
    </Alert>
  );
}
