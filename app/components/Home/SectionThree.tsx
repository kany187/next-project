import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Image from "next/image";

import house from "/public/house.png";
import house2 from "/public/house2.png";
import rent from "/public/rent.png";

const SectionThree = () => {
  return (
    <div>
      <Box bg="gray.100">
        <Stack
          direction="row"
          pt="20"
          pb="20"
          spacing={4}
          justifyContent="center"
        >
          <Card maxW="sm">
            <Image src={house} alt="house" width={400} />
            <Heading alignSelf="center">Looking for a house</Heading>
            <CardBody>
              <Text align="center">
                We can help you find your next home with confidence and
                security.
              </Text>
            </CardBody>
            <CardFooter alignItems="center">
              <Button colorScheme="blue" variant="ghost" alignItems="center">
                Find out more
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <Image src={house2} alt="house" width={400} />
            <Heading alignSelf="center">Sell a home</Heading>
            <CardBody>
              <Text align="center">
                No matter what path you take to your your home we can help you
                navigate a succesful sale.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"} variant="">
                See your options
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <Image src={rent} alt="house" width={400} />
            <Heading alignSelf="center">Rent a home</Heading>
            <CardBody>
              <Text align="center" flexWrap="wrap">
                With Congo Estate we create seamless online experience from
                shopping on the largest rental network.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" variant="ghost">
                Find rentals
              </Button>
            </CardFooter>
          </Card>
        </Stack>
      </Box>
    </div>
  );
};

export default SectionThree;