import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { pathPropertySchema } from "@/app/validationSchema";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = pathPropertySchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { assignedToUserId } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid user" }, { status: 400 });
  }

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
      assignedToUserId,
    },
  });
  return NextResponse.json(updatedProperty);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

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
