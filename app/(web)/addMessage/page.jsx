"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/app/config/api";

const AddMessage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(API_ENDPOINTS.messages.create, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ title }),
      });

      if (!res.ok) {
        throw new Error("Failed to add message");
      }

      // const data = await res.json();
      // alert("Message added successfully");
      setTitle("");
      // setDescription("");

      // await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mt-5">Add Message</h1>
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {/* <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      /> */}
      <button
        className="bg-slate-500 text-white font-bold px-8 py-2 rounded-md w-fit"
        type="submit"
      >
        Add Message
      </button>
    </form>
  );
};

export default AddMessage;
