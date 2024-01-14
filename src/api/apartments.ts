import axiosClient from '@/api/config/axios';
import { API_ROUTES } from '@/constants/routes/ApiRoutes';

export const getApartments = async ({
  search,
  minPrice,
  maxPrice,
  roomsCount,
  minSquare,
  maxSquare,
  minFloor,
  maxFloor,
}) => {
  const { data } = await axiosClient.get('/apartments', {
    params: {
      roomCount: roomsCount && roomsCount.length ? roomsCount.join(',') : '-1',
      search,
      minPrice,
      maxPrice,
      minSquare,
      maxSquare,
      minFloor,
      maxFloor,
    },
  });

  return data;
};

export const createApartment = async ({
  title,
  description,
  price,
  photo,
  floorNumber,
  totalFloors,
  locationId,
  rooms,
  square,
}) => {
  const formData = new FormData();

  console.log('photo type:', typeof photo);
  console.log('photo:', photo);

  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('photo', photo as File);
  formData.append('floorNumber', floorNumber);
  formData.append('totalFloors', totalFloors);
  formData.append('locationId', locationId);
  formData.append('rooms', rooms);
  formData.append('square', square);

  console.log('formData:', formData);

  try {
    const response = await axiosClient.postForm(API_ROUTES.CREATE_APARTMENT, {
      title,
      description,
      price,
      photo,
      floorNumber,
      totalFloors,
      locationId,
      rooms,
      square,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error creating apartment:', error);
    throw error;
  }
};
