import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { PropertySchema } from "@/app/validationSchema";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = PropertySchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!property)
    return NextResponse.json({ error: "Invalid property" }, { status: 404 });

  const updatedProperty = await prisma.property.update({
    where: { id: property.id },
    data: {
      price: body.price,
      bed: body.bed,
      bath: body.bath,
      streetAddress: body.streetAddress,
      country: body.country,
      city: body.city,
    },
  });
  return NextResponse.json(updatedProperty);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!property)
    return NextResponse.json({ error: "Invalid property" }, { status: 404 });

  await prisma.property.delete({
    where: { id: property.id },
  });

  return NextResponse.json({});
}
