import axios from '@/lib/axios';
import { UserFavorite } from '@/interfaces/user';

export const getUsersFavorites = async () => {
  const { data } = await axios.get(`/users/favorites/`);

  return data;
};

export const createUserFavorite = async (user_favorite: UserFavorite) => {
  const { data } = await axios.post(`/users/favorites/`, user_favorite);

  return data;
};

export const addUserFavorite = async ({
  event_type = 'favorite',
  event_id,
}: {
  event_type?: 'favorite' | 'attend';
  event_id: string;
}) => {
  const { data } = await axios.post('/users/favorites/add', {
    event_type,
    event_id,
  });
  return data;
};

export const removeUserFavorite = async ({
  event_type = 'favorite',
  event_id,
}: {
  event_type?: 'favorite' | 'attend';
  event_id: string;
}) => {
  const { data } = await axios.post('/users/favorites/remove', {
    event_type,
    event_id,
  });
  return data;
};

export const readUserFavorite = async (id: string) => {
  const { data } = await axios.get(`/users/favorites/${id}`);

  return data;
};

export const updateUserFavorite = async (
  id: string,
  user_favorite: UserFavorite
) => {
  const { data } = await axios.put(`/users/favorites/${id}`, user_favorite);

  return data;
};

export const deleteUserFavorite = async (id: string) => {
  const { data } = await axios.delete(`/users/favorites/${id}`);

  return data;
};
