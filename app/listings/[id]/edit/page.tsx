import React from "react";
import PropertyForm from "../../_components/PropertyForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}
const EditPropertyPage = async ({ params }: Props) => {
  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!property) notFound();

  return <PropertyForm property={property} />;
};

export default EditPropertyPage;
