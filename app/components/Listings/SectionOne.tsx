import React from "react";

import Search from "./Search/Search";
import { Box, Button, Stack } from "@chakra-ui/react";

const SectionOne = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Search />
        <Stack direction="row">
          <Button bgColor="gray.200">List</Button>
          <Button>Map</Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default SectionOne;
