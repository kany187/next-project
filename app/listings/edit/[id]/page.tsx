import React from "react";
import PropertyForm from "../../_components/PropertyForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import DeletePropertyButton from "./DeletePropertyButton";
import { Stack } from "@chakra-ui/react";

interface Props {
  params: { id: string };
}
const EditPropertyPage = async ({ params }: Props) => {
  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!property) notFound();

  return (
    <>
      <Stack spacing="2">
        <PropertyForm property={property} />
        <DeletePropertyButton propertyId={property.id} />
      </Stack>
    </>
  );
};

export default EditPropertyPage;
