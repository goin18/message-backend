import React from 'react'
import EditMessageForm from '@/components/EditMessageForm'
import { API_ENDPOINTS } from '@/app/config/api';

const getMessageById = async (id) => {
  try {
    const res = await fetch(`${API_ENDPOINTS.messages.getOne(id)}`, {cache: "no-store"});
    if (!res.ok) {
      throw new Error("Failed to fetch message");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


const EditMessage = async ({ params }) => {
  const { id } = params;
  const message = await getMessageById(id);
  const { title, description } = message.data;
  return (
    <div>
      <EditMessageForm id={id} title={title} description={description} />
    </div>
  )
}

export default EditMessage