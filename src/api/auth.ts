import axiosClient from '@/api/config/axios';

export const getProfile = async () => {
  const { data } = await axiosClient.get('/auth/profile');

  return data;
};
