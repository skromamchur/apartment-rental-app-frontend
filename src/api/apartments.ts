import axiosClient from '@/api/config/axios';
import { API_ROUTES } from '@/constants/routes/ApiRoutes';

export const getApartment = async ({ id }: { id: number }) => {
  const { data } = await axiosClient.get(`/apartments/${id}`);

  return data;
};

export const getApartments = async ({
  search,
  minPrice,
  maxPrice,
  roomsCount,
  minSquare,
  maxSquare,
  minFloor,
  maxFloor,
  type,
  sortType,
  state,
  city
}) => {
  const { data } = await axiosClient.get('/apartments', {
    params: {
      roomCount: roomsCount && roomsCount.length ? roomsCount.join(',') : '-1',
      type: type && type.length ? type.join(',') : '-1',
      search,
      minPrice,
      maxPrice,
      minSquare,
      maxSquare,
      minFloor,
      maxFloor,
      sortType,
      state,
      city
    },
  });

  return data;
};

export const createApartment = async ({
  title,
  description,
  price,
  photos,
  floorNumber,
  totalFloors,
  locationId,
  rooms,
  square,
  type,
  features,
}) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('floorNumber', floorNumber);
    formData.append('totalFloors', totalFloors);
    formData.append('locationId', locationId);
    formData.append('rooms', rooms);
    formData.append('square', square);
    formData.append('type', type);

    Array.from(photos).forEach((photo) => {
      formData.append(`photos`, photo, photo.name);
    });

    features.forEach((feature) => {
      formData.append('features', feature);
    });

    const response = await axiosClient.post(API_ROUTES.CREATE_APARTMENT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
