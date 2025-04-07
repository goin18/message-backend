import connectMongoDB from "@/lib/dbConnect";
import Message from "@/models/Message";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title } = await request.json();
  await connectMongoDB();
  await Message.create({ title, createdAt: Date.now(), updatedAt: Date.now() });
  return NextResponse.json({ message: "Message created successfully" }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  const messages = await Message.find();
  return NextResponse.json({ data: messages }, { status: 200 });
}

export async function DELETE(request) {
  // const { id } = await request.json();
  // console.log(`DELETE: ${id}`);
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Message.findByIdAndDelete(id);
  const messages = await Message.find();
  return NextResponse.json({ message: "Message deleted successfully", data: messages }, { status: 200 });
}

export async function PUT(request) {
  const { id, title } = await request.json();
  await connectMongoDB();
  await Message.findByIdAndUpdate(id, { title, updatedAt: Date.now() });
  return NextResponse.json({ message: "Message updated successfully ID" }, { status: 200 });
}