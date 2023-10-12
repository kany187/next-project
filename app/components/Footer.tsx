"use client";

import React from "react";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

import logo from "/public/logo.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("gray.500", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Stack
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Image src={logo} alt="Logo" width={80} />
          <Stack direction="row" spacing="6">
            <Link href="/about">
              <Box>About us</Box>
            </Link>

            <Box>Privacy</Box>

            <Box>Terms of use</Box>

            <Box>Help</Box>

            <Box>Contact us</Box>
          </Stack>
        </Stack>
      </Box>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>Copyright &copy; 2023 KIBOO Inc. All right reserved.</Text>

          <Stack direction="row" spacing={6}>
            <Text pt="2">Follow us:</Text>
            <IconButton
              colorScheme="teal"
              aria-label="instagram"
              icon={<AiOutlineInstagram />}
            />
            <IconButton
              colorScheme="teal"
              aria-label="facebook"
              icon={<AiFillFacebook />}
            />
            <IconButton
              colorScheme="teal"
              aria-label="instagram"
              icon={<AiOutlineWhatsApp />}
            />
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
