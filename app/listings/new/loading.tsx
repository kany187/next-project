import { Box } from "@chakra-ui/react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingPropertyNewPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton count={6} />
    </Box>
  );
};

export default LoadingPropertyNewPage;
