import React from "react";

import { Heading, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import prisma from "@/prisma/client";
import StatusBadge from "../../components/StatusBadge";
import ListingCard from "./ListingCard";

import Link from "next/link";
import PropertyFilter from "./PropertyFilter";

const ListingsPage = async () => {
  const property = await prisma.property.findMany();

  return (
    <div>
      <PropertyFilter />
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
          <Link href={`/listings/${prop.id}`}>
            <ListingCard
              key={prop.id}
              price={prop.price}
              streetAddress={prop.streetAddress}
              city={prop.city}
              country={prop.country}
              bed={prop.bed}
              bath={prop.bath}
              status={<StatusBadge status={prop.status} />}
            />
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ListingsPage;
