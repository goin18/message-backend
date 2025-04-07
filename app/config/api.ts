const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment
  ? 'http://localhost:3000/api'
  : process.env.NEXT_PUBLIC_API_URL || 'https://your-vercel-url.vercel.app/api';
  

export const API_ENDPOINTS = {
  messages: {
    getAll: `${API_BASE_URL}/message`,
    getOne: (id: string) => `${API_BASE_URL}/message/${id}`,
    create: `${API_BASE_URL}/message`,
    update: (id: string) => `${API_BASE_URL}/message/${id}`,
    delete: (id: string) => `${API_BASE_URL}/message?id=${id}`,
  },
}; 