import axios from '@/lib/axios';
// import {  } from '@/interfaces/user'

export const getUsersAttends = async () => {
  const { data } = await axios.get('/users/favorites/attends/');

  return data;
};
