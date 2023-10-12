import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { createPropertySchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPropertySchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newProperty = await prisma.property.create({
    data: {
      price: body.price,
      bed: body.bed,
      bath: body.bath,
      streetAddress: body.streetAddress,
      country: body.country,
      city: body.city,
    },
  });

  return NextResponse.json(newProperty, { status: 201 });
}
