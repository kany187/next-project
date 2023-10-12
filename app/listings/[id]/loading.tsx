import {
  IconButton,
  Card,
  Stack,
  Flex,
  Tooltip,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { PiHouseLineBold } from "react-icons/pi";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import villa from "/public/villa.jpg";

const LoadingPropertyPage = () => {
  return (
    <Box className="max-w-xl">
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
          {/* <Skeleton /> */}
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
      <Skeleton />
      <Skeleton count={2} />
      <Skeleton />

      <Skeleton count={3} />

      <Stack direction="row" spacing="10" pt="4">
        <Flex gap="2" align="center">
          <PiHouseLineBold size="20" />
          <Flex direction="column">
            <Skeleton />
            <Text fontSize="xs">Property type</Text>
          </Flex>
        </Flex>
        <Flex gap="2" align="center">
          <CiCalendar size="20" />
          <Flex direction="column">
            <Skeleton />
            <Text fontSize="xs">Congo Estate</Text>
          </Flex>
        </Flex>
      </Stack>
      <Stack direction="row" pt="4">
        <Button>Get more info</Button>
        <Button>Share this home</Button>
      </Stack>
    </Box>
  );
};

export default LoadingPropertyPage;
