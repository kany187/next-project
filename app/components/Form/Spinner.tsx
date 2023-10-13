import { CircularProgress } from "@chakra-ui/react";
import React from "react";

const Spinner = () => {
  return (
    <CircularProgress isIndeterminate color="green.300" size="25px" ml="3" />
  );
};

export default Spinner;
