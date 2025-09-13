import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function connect() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB接続に失敗しました");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await connect();
    const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
    return NextResponse.json({ message: "Success", todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name } = await req.json();
    await connect();
    const todos = await prisma.todo.create({ data: { name } });
    return NextResponse.json({ message: "Success", todos }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};
