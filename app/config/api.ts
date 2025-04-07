const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment
  ? 'http://localhost:3000/api'
  : process.env.NEXT_PUBLIC_API_URL || 'https://your-vercel-url.vercel.app/api';
  

export const API_ENDPOINTS = {
  messages: {
    getAll: `${API_BASE_URL}/messages`,
    getOne: (id: string) => `${API_BASE_URL}/messages/${id}`,
    create: `${API_BASE_URL}/messages`,
    update: (id: string) => `${API_BASE_URL}/messages/${id}`,
    delete: (id: string) => `${API_BASE_URL}/messages?id=${id}`,
  },
}; 