import axiosClient from '@/api/config/axios';

export const getPlaceDetails = async ({ lat, lng }) => {
  const { data } = await axiosClient.post('/maps', {
    lat,
    lng,
  });

  return data;
};
