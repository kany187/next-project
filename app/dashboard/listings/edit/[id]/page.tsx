import React from "react";
import PropertyForm from "../../_components/PropertyForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import DeletePropertyButton from "./DeletePropertyButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface Props {
  params: { id: string };
}
const EditPropertyPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!property) notFound();

  return (
    <>
      <PropertyForm property={property} />
      {session && <DeletePropertyButton propertyId={property.id} />}
    </>
  );
};

export default EditPropertyPage;
