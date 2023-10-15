"use client";

import {
  Card,
  CardBody,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Skeleton from "react-loading-skeleton";

const SectionFour = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded)
    return (
      <div>
        {" "}
        <Skeleton height="200" width="300" />
      </div>
    );
  return (
    <div>
      <Heading
        color="black"
        size="md"
        pt="20"
        ml={{ base: 0, sm: "100px", md: "100px", lg: "100px", xl: "120px" }}
      >
        Recommended cities
      </Heading>
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
          <GoogleMap
            zoom={14}
            center={{ lat: -4.39312, lng: 15.33253288269043 }}
            mapContainerStyle={{ width: "300px", height: "300px" }}
          >
            <Marker position={{ lat: -4.39312, lng: 15.33253288269043 }} />
          </GoogleMap>

          <CardBody>
            <Heading size="md">Lemba</Heading>
            <Text fontSize="sm" fontWeight="bold">
              <Highlight
                query="Listings for sale"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                143 Listings for sale
              </Highlight>
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              <Highlight
                query="Median Listing Home Price"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                $200,000 Median Listing Home Price
              </Highlight>
            </Text>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <GoogleMap
            zoom={14}
            center={{ lat: -4.399484157562256, lng: 15.264913558959961 }}
            mapContainerStyle={{ width: "300px", height: "300px" }}
          >
            <Marker
              position={{ lat: -4.399484157562256, lng: 15.264913558959961 }}
            />
          </GoogleMap>

          <CardBody>
            <Heading size="md" as="b">
              {" "}
              Kananga
            </Heading>
            <Text fontWeight="bold" fontSize="sm">
              <Highlight
                query="Listings for sale"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                103 Listings for sale
              </Highlight>
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              <Highlight
                query="Median Listing Home Price"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                $300,000 Median Listing Home Price
              </Highlight>
            </Text>
          </CardBody>
        </Card>
        <Card maxW="sm">
          <GoogleMap
            zoom={14}
            center={{ lat: -4.342519760131836, lng: 15.237099647521973 }}
            mapContainerStyle={{ width: "300px", height: "300px" }}
          >
            <Marker
              position={{ lat: -4.342519760131836, lng: 15.237099647521973 }}
            />
          </GoogleMap>
          <CardBody>
            <Heading size="md"> Goma</Heading>
            <Text fontWeight="bold" fontSize="sm">
              <Highlight
                query="Listings for sale"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                33 Listings for sale
              </Highlight>
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              <Highlight
                query="Median Listing Home Price"
                styles={{ py: "1", fontWeight: "normal" }}
              >
                $500,000 Median Listing Home Price
              </Highlight>
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default SectionFour;
