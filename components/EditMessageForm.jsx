"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/app/config/api";

const EditMessageForm = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  // const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_ENDPOINTS.messages.update(id)}`, {
      method: "PUT",
      body: JSON.stringify({ newTitle }),  //newDescription
    });

    if (!res.ok) {
      throw new Error("Failed to update message");
    }

    // const data = await res.json();
    alert("Message updated successfully");
    router.push("/");
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mt-5">Edit Message</h1>
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      {/* <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      /> */}
      <button
        className="bg-slate-500 text-white font-bold px-8 py-2 rounded-md w-fit"
        type="submit"
      >
        Update Message
      </button>
    </form>
  );
};

export default EditMessageForm;
