import prisma from "@/prisma/client";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import villa from "/public/villa.jpg";

interface Props {
  params: { id: string };
}
const page = async ({ params }: Props) => {
  //   if (typeof params.id !== "number") return notFound();

  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!property) notFound();

  return (
    <div>
      <Box pt="10">
        <Image src={villa} alt="villa" width={500} />
      </Box>
      <Heading>{property.price}</Heading>
      <Stack direction="row">
        <p>{property.bed} bedrooms</p>
        <p>{property.bath} bathrooms</p>
      </Stack>

      <p>{property.city}</p>
      <p>{property.country}</p>
      <p>{property.streetAddress}</p>

      <p>{property.createdAt.toDateString()}</p>
    </div>
  );
};

export default page;
