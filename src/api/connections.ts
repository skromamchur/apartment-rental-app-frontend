import axiosClient from '@/api/config/axios';

export const createUserConnection = async ({ id }) => {
  const { data } = await axiosClient.post(`/connections/${id}`);

  return data;
};
