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

import Image from "next/image";

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
            <Image
              src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697274568/congo-estate/gjxwhfcjuxdzwwsisrwe.png"
              alt="search-house-img"
              width={400}
              height={100}
            />
            <Heading alignSelf="center">Looking for a house</Heading>
            <CardBody>
              <Text align="center">
                We can help you find your next home with confidence and
                security.
              </Text>
            </CardBody>
            <CardFooter alignItems="center">
              <Button colorScheme="blue" alignItems="center">
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
            <CardFooter>
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
            <CardFooter>
              <Button colorScheme="blue">Find rentals</Button>
            </CardFooter>
          </Card>
        </Stack>
      </Box>
    </div>
  );
};

export default SectionThree;
