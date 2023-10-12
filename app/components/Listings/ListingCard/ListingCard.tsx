import React from "react";

import {
  Card,
  Heading,
  Stack,
  Text,
  CardBody,
  Button,
  Badge,
  Box,
} from "@chakra-ui/react";

import villa from "/public/villa.jpg";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  price: any;
  city: any;
  country: any;
  streetAddress: any;
  bed: any;
  bath: any;
  status: any;
}

const ListingCard = ({
  price,
  city,
  country,
  streetAddress,
  bed,
  bath,
  status,
}: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden" maxW="md">
        <Badge
          // colorScheme="teal"
          // borderRadius="full"
          // px="2"
          pos="absolute"
          top="2"
          right="2"
          zIndex="1"
        >
          {status}
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
            {price}
          </Heading>
          <Stack direction="row">
            <Text as="b">{bed} bed</Text>
            <Text as="b">{bath} bath</Text>
            <Text as="b">2,214 sqft</Text>
            <Text as="b">1,5000</Text>
          </Stack>
          <Stack direction="row">
            <Text fontSize="sm">
              {streetAddress} {city} {country}
            </Text>
            <Button>Contact Agent</Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListingCard;
