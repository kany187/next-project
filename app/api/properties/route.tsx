import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { PropertySchema } from "@/app/validationSchema";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  // const session = await getServerSession(authOptions);

  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = PropertySchema.safeParse(body);

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
      imgSrc: body.imgSrc,
    },
  });

  return NextResponse.json(newProperty, { status: 201 });
}
