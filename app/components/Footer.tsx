import React from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import facebook from "/public/facebook.png";
import instagram from "/public/instagram.png";
import logo from "/public/logo.jpg";

const Footer = () => {
  return (
    <div>
      <Box height="10px">
        <Stack
          direction="row"
          spacing={5}
          h="100px"
          p={9}
          justifyContent="center"
        >
          <Text color="black">About us</Text>
          <Divider orientation="vertical" mb="2" />
          <Text color="black">Privacy</Text>
          <Divider orientation="vertical" color="black" />
          <Text color="black">Terms of use</Text>
          <Divider orientation="vertical" color="black" />
          <Text color="black">Help</Text>
        </Stack>
        <Box pl={190} pr={190} pb="10">
          <Divider orientation="horizontal" color="black" />
        </Box>

        <Box h="100px">
          <Stack direction="row" spacing={5} justifyContent="center">
            <Image src={logo} alt="Logo" width={80} />
            <Text color="black" pt="8">
              Follow us:{" "}
            </Text>
            <Image src={facebook} alt="shot image" width={50} />
            <Image src={instagram} alt="shot image" width={50} />
          </Stack>
        </Box>
        <Text align="center" color="black" bgColor="gray.200">
          Copyright &copy; 2023 KIBOO Inc. All right reserved.
        </Text>
      </Box>
    </div>
  );
};

export default Footer;
