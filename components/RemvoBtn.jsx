"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { API_ENDPOINTS } from '../app/config/api';


const RemvoBtn = ({ onPress, id, setMessages }) => {
  const router = useRouter();

  const removeMessage = async () => {
    const confirmed = confirm("Are you sure you want to delete this message?");
    if (confirmed) {
      console.log(id);
      console.log(API_ENDPOINTS.messages.delete(id));
      
      const res = await fetch(API_ENDPOINTS.messages.delete(id), {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete message");
      }
      const data = await res.json();
      alert("Message deleted successfully");
      setMessages(data.data);

      router.refresh();
    }
  }

  return (
    <button className="text-red-400" 
    onClick={removeMessage}
    // onClick={onPress}
     >
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemvoBtn