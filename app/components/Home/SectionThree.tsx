import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";

const SectionThree = () => {
  return (
    <Box bg="gray.100">
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 3 }}
        spacing={4}
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        pt="20"
        pb="20"
      >
        <Card maxW="sm">
          <Image
            src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697274568/congo-estate/gjxwhfcjuxdzwwsisrwe.png"
            alt="search-house-img"
            width={400}
            height={100}
          />
          <Heading alignSelf="center">Looking for a house</Heading>
          <CardBody>
            <Text align="center">
              We can help you find your next home with confidence and security.
            </Text>
          </CardBody>
          <CardFooter alignSelf="center">
            <Button colorScheme="blue" alignSelf="center">
              Find out more
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <Image
            src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697268248/congo-estate/zxabg5mwfncivik81mbv.png"
            alt="sell-house-img"
            width={400}
            height={100}
          />
          <Heading alignSelf="center">Sell a home</Heading>
          <CardBody>
            <Text align="center">
              No matter what path you take to your your home we can help you
              navigate a succesful sale.
            </Text>
          </CardBody>
          <CardFooter alignSelf="center">
            <Button colorScheme={"blue"}>See your options</Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <Image
            src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697270494/congo-estate/siye4212otm7ejdebcsk.png"
            alt="house"
            width={400}
            height={100}
          />
          <Heading alignSelf="center">Rent a home</Heading>
          <CardBody>
            <Text align="center" flexWrap="wrap">
              With Congo Estate we create seamless online experience from
              shopping on the largest rental network.
            </Text>
          </CardBody>
          <CardFooter alignSelf="center">
            <Button colorScheme="blue">Find rentals</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default SectionThree;
