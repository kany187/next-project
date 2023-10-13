import React from "react";

import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import prisma from "@/prisma/client";
import StatusBadge from "../../components/StatusBadge";
import ListingCard from "./ListingCard";

import Link from "next/link";
import PropertyFilter from "./PropertyFilter";
import { ListingStatus, Property } from "@prisma/client";
import PropertySortFilter from "./PropertySortFilter";

interface Props {
  searchParams: { listingStatus: ListingStatus; orderBy: keyof Property };
}

const ListingsPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(ListingStatus);
  const status = statuses.includes(searchParams.listingStatus)
    ? searchParams.listingStatus
    : undefined;

  const orderBy = searchParams.orderBy
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const property = await prisma.property.findMany({
    where: {
      listingStatus: status,
    },
    orderBy,
  });

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
        <PropertySortFilter search={searchParams} />
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
