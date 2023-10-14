import React from "react";
import {
  Badge,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";
import pic from "/public/pic.jpg";

const SectionTwo = () => {
  return (
    <div>
      <Heading color="black" size="md" pt="20" ml="230">
        Browse homes in Lemba, Kinshasa
      </Heading>
      <div>
        <Stack direction="row" pt="18" spacing={4} justifyContent="center">
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                as="b"
                fontSize="xl"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                New Listings
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                25
              </Badge>
            </Flex>

            <Image src={pic} alt="shot image" width={445} height={300} />
          </Card>
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                as="b"
                fontSize="xl"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                Lands
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                5
              </Badge>
            </Flex>

            <Image src={pic} alt="shot image" width={445} height={300} />
          </Card>
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                as="b"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                Price reduced
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                22
              </Badge>
            </Flex>

            <Image
              src={pic}
              alt="shot image"
              width={445}
              height={300}
              style={{
                opacity: "20",
              }}
            />
          </Card>
        </Stack>
      </div>
      <div className="second-div">
        <Stack direction="row" pt="18" spacing={4} justifyContent="center">
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                as="b"
                fontSize="xl"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                Office spaces
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                10
              </Badge>
            </Flex>

            <Image src={pic} alt="shot image" width={445} height={300} />
          </Card>
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                as="b"
                fontSize="xl"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                Lands
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                5
              </Badge>
            </Flex>

            <Image src={pic} alt="shot image" width={445} height={300} />
          </Card>
          <Card borderRadius="10px" overflow="hidden">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                as="b"
                pos="absolute"
                top="2"
                left="2"
                zIndex="1"
              >
                Price reduced
              </Text>
              <Badge
                px="3"
                colorScheme="gray"
                borderRadius="full"
                pos="absolute"
                top="2"
                right="2"
                zIndex="1"
              >
                22
              </Badge>
            </Flex>

            <Image
              src={pic}
              alt="shot image"
              width={445}
              height={300}
              style={{
                opacity: "20",
              }}
            />
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default SectionTwo;
