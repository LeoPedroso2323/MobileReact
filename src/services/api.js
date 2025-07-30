import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});

// Funções específicas de requisições
export const getPosts = async () => {
  const posts = await api.get('/posts');
  return posts.data;
};

export const getUsers = async () => {
  const users = await api.get('/users');
  return users.data;
};

export const getTodos = async () => {
  const todos = await api.get('/todos');
  return todos.data;
};

export default api;
