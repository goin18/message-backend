"use client";

import React, { useEffect, useState } from "react";
import RemvoBtn from "./RemvoBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import moment from "moment";
import { API_ENDPOINTS } from "@/app/config/api";

const getMessage = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/message", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessage();
      setMessages(data.data);
    };

    fetchMessages();
  }, []);

  // API delete
  const handleDelete = async (id) => {
    const res = await fetch(`${API_ENDPOINTS.messages.delete(id)}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      throw new Error("Failed to delete message");
    }
    const data = await res.json();
    alert("Message deleted successfully");
    setMessages(data.data);
  };

  return (
    <>
      {messages.map((message) => {
        console.log(message);
        return (
          <div
            key={message._id}
            className="p-4 border-slate-300 border my-3 flex justify-between items-center rounded-lg gap-5 items-start"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{message.title}</h2>

              <p className="text-sm text-gray-500">
                Created at:{" "}
                {moment(message.createdAt).format("DD.MM.YYYY HH:mm:ss")} -  {moment(message.createdAt).fromNow()}
              </p>
              {/* <p className="text-sm text-gray-500">
                Updated at: {moment(mes bsage.updatedAt).format("DD.MM.YYYY HH:mm:ss")}
              </p> */}
            </div>
            <div className="flex gap-2 ">
              <RemvoBtn
                id={message._id}
                // onPress={() => handleDelete(topic._id) }
                setMessages={setMessages}
              />
              <Link href={`/editMessage/${message._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MessageList;
