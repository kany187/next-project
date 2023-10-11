import { NextRequest, NextResponse } from "next/server";

//import { prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  //const property = await prisma.user.findMany();
  //return NextResponse.json(property);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(body);
}
