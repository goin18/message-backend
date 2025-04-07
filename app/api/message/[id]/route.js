import connectMongoDB from "@/lib/dbConnect";
import Message from "@/models/Message";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle } = await request.json();
  await connectMongoDB();
  await Message.findByIdAndUpdate(id, { title: newTitle, updatedAt: Date.now() });
  return NextResponse.json({ message: "Message updated successfully" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const message = await Message.findOne({ _id: id });
  return NextResponse.json({ data: message }, { status: 200 });
  
}