import React from "react";

import {
  Card,
  Heading,
  Stack,
  Text,
  Image as Img,
  CardBody,
  Button,
  Badge,
  Box,
} from "@chakra-ui/react";

import villa from "/public/villa.jpg";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const ListingCard = () => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden" maxW="md">
        <Badge
          colorScheme="teal"
          borderRadius="full"
          px="2"
          pos="absolute"
          top="2"
          right="2"
          zIndex="1"
        >
          New
        </Badge>
        <Box
          bgColor="gray.200"
          p="3"
          borderRadius="full"
          pos="absolute"
          top="270"
          right="2"
          zIndex="1"
        >
          <AiOutlineHeart size="30" />
        </Box>
        <Image src={villa} alt="villa" width={500} />

        <CardBody>
          <Heading fontSize="2xl" as="b">
            $649,000
          </Heading>
          <Stack direction="row">
            <Text as="b">4 bed</Text>
            <Text as="b">3.5 bath</Text>
            <Text as="b">2,214 sqft</Text>
            <Text as="b">1,5000</Text>
          </Stack>
          <Stack direction="row">
            <Text fontSize="sm">
              Cite Solongo nord 3728 Lemba, Kinshasa, Replublic Democratique du
              Congo
            </Text>
            <Button>Contact Agent</Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListingCard;
