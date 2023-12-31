import { Heading, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ListingCard from "./ListingCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuePage = () => {
  const property = [1, 2, 3];

  return (
    <div>
      <Heading color="black" pt="10">
        Homes for sales in Lemba, Kinshasa
      </Heading>
      <Stack direction="row" pt="5">
        <Text color="black" pt="2">
          24 Homes
        </Text>
        <Text color="black" pt="2">
          Sort by
        </Text>
        <Select placeholder="Newest listings" width="40" color="gray">
          <option>Newest listings</option>
          <option>Price (High to Low)</option>
          <option>Price (Low to High)</option>
          <option>Bedrooms</option>
          <option>Bathrooms</option>
        </Select>
      </Stack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2} pt="10">
        {property.map((prop) => (
          <ListingCard
            key={prop}
            price={<Skeleton />}
            streetAddress={<Skeleton />}
            city={<Skeleton />}
            country={<Skeleton />}
            bed={<Skeleton />}
            bath={<Skeleton />}
            status={<Skeleton width="5rem" />}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default LoadingIssuePage;
