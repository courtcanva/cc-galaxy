import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface ToastData {
  message: string;
  status: "error" | "loading" | "info" | "warning" | "success" | undefined;
}

export function useToastHook() {
  const [state, setState] = useState<ToastData | void>();
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { message, status } = state;
      toast({
        title: status,
        description: message,
        status: status,
        duration: 90000,
        position: "top",
        isClosable: true,
      });
    }
  }, [state, toast]);

  return [state, setState] as const;
}
