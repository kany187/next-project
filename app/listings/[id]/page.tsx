import prisma from "@/prisma/client";
import {
  AvatarBadge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Highlight,
  IconButton,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import villa from "/public/villa.jpg";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { PiHouseLineBold } from "react-icons/pi";
interface Props {
  params: { id: string };
}
const page = async ({ params }: Props) => {
  //   if (typeof params.id !== "number") return notFound();

  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!property) notFound();

  const todayDate = new Date();

  const timeDifference = todayDate.getTime() - property.createdAt.getTime();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.ceil(timeDifference / millisecondsInADay);
  return (
    <div>
      <Box pos="relative" height="400px" width="full" overflow="hidden">
        <IconButton
          aria-label="left-arrow"
          icon={<BsChevronCompactLeft />}
          pos="absolute"
          left="0"
          top="40"
          zIndex={2}
        />
        <IconButton
          aria-label="right-arrow"
          icon={<BsChevronCompactRight />}
          pos="absolute"
          right="640"
          top="40"
          zIndex={2}
        />
        <Card borderRadius="10" overflow="hidden" maxW="lg">
          <Image src={villa} alt="villa" width={600} />
        </Card>
      </Box>
      <Stack direction="row" ml="430">
        <Box borderWidth="1px" borderRadius="full" borderColor="black" p="1">
          <AiOutlineHeart size="30" />
        </Box>
        <Box borderWidth="1px" borderRadius="full" borderColor="black" p="1">
          <FiShare size="30" />
        </Box>
      </Stack>
      <Flex direction="row" gap={2} alignItems="center">
        <Tooltip>
          <Box
            h="13px"
            w="13px"
            position="relative"
            bgColor="green.500"
            borderRadius="50%"
          />
        </Tooltip>
        <Text>For sale</Text>
      </Flex>
      <Heading>${property.price}</Heading>
      <Stack direction="row">
        <Text fontWeight="bold" fontSize="sm">
          {property.bed} bedrooms
        </Text>
        <Text fontWeight="bold" fontSize="sm">
          {property.bath} bathrooms
        </Text>
      </Stack>
      <Flex gap="2" pt="4">
        <Text>{property.streetAddress}</Text>
        <Text>{property.city}</Text>
        <Text>{property.country}</Text>
      </Flex>
      <Stack direction="row" spacing="10" pt="4">
        <Flex gap="2" align="center">
          <PiHouseLineBold size="20" />
          <Flex direction="column">
            <Text>Single Family</Text>
            <Text fontSize="xs">Property type</Text>
          </Flex>
        </Flex>
        <Flex gap="2" align="center">
          <CiCalendar size="20" />
          <Flex direction="column">
            <Text>{daysDifference} day ago</Text>
            <Text fontSize="xs">Congo Estate</Text>
          </Flex>
        </Flex>
      </Stack>
      <Stack direction="row" pt="4">
        <Button>Get more info</Button>
        <Button>Share this home</Button>
      </Stack>
    </div>
  );
};

export default page;
