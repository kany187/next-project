import { Text } from "@chakra-ui/react";
import React, { PropsWithChildren, ReactNode } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return <Text color="red">{children}</Text>;
};

export default ErrorMessage;
