import axiosClient from '@/api/config/axios';
import { API_ROUTES } from '@/constants/routes/ApiRoutes';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';
import { firebaseApp } from '@/config/firebase';
import { generateUUID } from '@/utils/GenerateUUID';

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
  city,
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
      city,
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
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('price', price);
    // formData.append('floorNumber', floorNumber);
    // formData.append('totalFloors', totalFloors);
    // formData.append('locationId', locationId);
    // formData.append('rooms', rooms);
    // formData.append('square', square);
    // formData.append('type', 'month');

    const photosLinksPromises = Array.from(photos).map(async (photo: Blob) => {
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `/apartments/${generateUUID()}`);

      await uploadBytes(storageRef, photo);

      return await getDownloadURL(storageRef);
    });

    const photosLinks = await Promise.all(photosLinksPromises);

    // features.forEach((feature) => {
    //   formData.append('features', feature);
    // });
    //
    // photosLinks.forEach((photoLink) => {
    //   formData.append('photo', photoLink);
    // });

    const response = await axiosClient.post(API_ROUTES.CREATE_APARTMENT, {
      photos: photosLinks,
      title,
      description,
      price,
      floorNumber,
      totalFloors,
      locationId,
      rooms,
      square,
      type: 'month',
      features,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
