import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: number } }
// ) {
//   const property = await prisma.user.findUnique({
//     where: {id: parseInt(number)}
//   })
//   return NextResponse.json("hello");
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  return NextResponse.json("hello");
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  return NextResponse.json("hello");
}
