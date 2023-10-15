"use client";

import {
  Box,
  Container,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("gray.500", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Stack py={4} spacing={4} justify="center" align="center">
          <Image
            src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697264845/congo-estate/rcnp3oogsmrzdbzbv92n.jpg"
            alt="Logo"
            width={80}
            height={100}
          />
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
