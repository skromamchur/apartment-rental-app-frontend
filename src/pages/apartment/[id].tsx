import { Header } from '@/components/Layout/Header';
import { Roboto } from 'next/font/google';
const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });
import axios from 'axios';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getApartment } from '@/api/apartments';

import React, { useContext, useState } from 'react';
import { ApartmentPageCarousel } from '@/components/ApartmentPage/ApartmentPageCarousel';
import { ApartmentPageDescription } from '@/components/ApartmentPage/ApartmentPageDescription';
import { ApartmentPageLocationInformation } from '@/components/ApartmentPage/ApartmentPageLocationInformation';
import { ApartmentPageGeneralInformation } from '@/components/ApartmentPage/ApartmentPageGeneralInformation';
import { ApartmentPageFeatures } from '@/components/ApartmentPage/ApartmentPageFeatures';
import { Button } from '@/components/Button';
import { ReviewTextArea } from '@/components/ReviewTextarea';
import { useRouter } from 'next/router';
import { APP_ROUTES } from '@/constants/routes/AppRoutes';
import { createUserConnection } from '@/api/connections';
import { getProfile } from '@/api/auth';
import { ReviewList } from '@/components/ReviewList';
import { UserAvatar } from '@/components/UserAvatar';
import { UserContext } from '@/contexts/UserContext';
import { IsChatAlreadyExist } from '@/utils/IsChatAlreadyExist';
import { FormCard } from '@/components/FormCard';
import { ComplaintDialog } from '@/components/Dialogs/ComplaintDialog';

const LocationIcon = ({ type }) => {
  if (type === 'Парки') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-trees"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
        <path d="M15 21l0 -3" />
        <path d="M8 13l-2 -2" />
        <path d="M8 12l2 -2" />
        <path d="M8 21v-13" />
        <path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
      </svg>
    );
  }

  if (type === 'Торгові центри') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-cart"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
    );
  }

  if (type === 'Супермаркети') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-basket"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z" />
        <path d="M17 10l-2 -6" />
        <path d="M7 10l2 -6" />
      </svg>
    );
  }

  if (type === 'Навчальні заклади') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-school"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    );
  }

  if (type === 'Транспорт') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-bus-stop"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
        <path d="M16 17h-8" />
        <path d="M16 5l1.5 7h4.5" />
        <path d="M9.5 10h7.5" />
        <path d="M12 5v5" />
        <path d="M5 9v11" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-first-aid-kit"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M10 14h4" />
      <path d="M12 12v4" />
    </svg>
  );
};

const LocationItem = ({ location }) => {
  console.log(location);
  return (
    <div key={location.category} className="bg-white p-4 mt-4">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-2">
          <LocationIcon type={location.type} />
        </div>
        <h2 className="text-xl font-semibold">{location.type}</h2>
      </div>
      <ul>
        {location.places.slice(0, 3).map((item, index) => (
          <li key={index} className="flex mb-2 items-start">
            <div className="flex flex-row items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-walk"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M7 21l3 -4" />
                <path d="M16 21l-2 -4l-3 -3l1 -6" />
                <path d="M6 12l2 -3l4 -1l3 3l3 1" />
              </svg>
              <span className="text-sm mr-2 whitespace-nowrap min-w-[50px]">
                {Math.round(Number(item.walkingTime) / 60)} хв
              </span>
            </div>
            <span className="text-sm line-clamp-3">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LocationList = ({ locations }) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Інфраструктура поблизу</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <LocationItem location={location} />
        ))}
      </div>
    </FormCard>
  );
};

const ApartmentPage = ({
  description,
  lat,
  lng,
  title,
  street,
  city,
  state,
  price,
  floorNumber,
  totalFloors,
  square,
  type,
  rooms,
  features,
  photos,
  user,
  createdAt,
  id,
  reviews,
  hospitals,
  places,
  allowPets,
  allowChildren,
  wallsType,
  warmingType,
  buildAge,
  plan,
}) => {
  const router = useRouter();

  const { connections, id: profileId, isAuth } = useContext(UserContext);

  console.log(hospitals);
  console.log(places);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden pb-20 ${inter.className}`}
    >
      <ComplaintDialog userId={profileId} apartmentId={id} open={open} setOpen={setOpen} />
      <Header />
      <div className="w-full xl:w-[1200px] mx-auto flex flex-row flex-1 space-x-10">
        <div className="w-full flex flex-1 flex-col mt-[32px] space-y-10">
          <div className="flex flex-col relative">
            <div className="text-[24px] leading">{title}</div>
            <div className="flex flex-row space-x-2 items-center mt-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.49981 0C4.50436 0 2.06738 2.43697 2.06738 5.4324C2.06738 9.14982 6.92888 14.6072 7.13586 14.8377C7.33027 15.0543 7.66971 15.0539 7.86377 14.8377C8.07075 14.6072 12.9322 9.14982 12.9322 5.4324C12.9322 2.43697 10.4952 0 7.49981 0ZM7.49981 8.1656C5.99272 8.1656 4.76665 6.93949 4.76665 5.4324C4.76665 3.92531 5.99275 2.69924 7.49981 2.69924C9.00688 2.69924 10.2329 3.92534 10.2329 5.43243C10.2329 6.93952 9.00688 8.1656 7.49981 8.1656Z"
                  fill="#FECD4C"
                />
              </svg>
              <span className="text-[14px] text-black">
                {' '}
                {state}, {city}, {street}
              </span>
            </div>
            <span className="absolute bottom-0 font-medium text-[24px] right-0">{price}₴</span>
          </div>
          <ApartmentPageCarousel photos={photos} />
          <ApartmentPageGeneralInformation
            floorNumber={floorNumber}
            type={type}
            totalFloors={totalFloors}
            square={square}
            rooms={rooms}
            createdAt={createdAt}
            allowChildren={allowChildren}
            allowPets={allowPets}
            wallsType={wallsType}
            warmingType={warmingType}
            buildAge={buildAge}
            plan={plan}
          />
          <ApartmentPageDescription description={description} />
          <ApartmentPageLocationInformation lat={lat} lng={lng} />
          <ApartmentPageFeatures featuresNames={features.map((feature) => feature.name)} />
          {reviews.length > 0 && <ReviewList reviews={reviews} />}
          <LocationList locations={places} />

          {isAuth && <ReviewTextArea id={id} />}
        </div>
        <div className="w-[300px] mt-[132px]">
          <div className="bg-white border border-opacity-10 py-5 px-10 flex flex-col items-center">
            <span className="relative inline-block">
              <UserAvatar
                avatar={user.avatar}
                size="large"
                className="w-[116px] h-[116px] min-w-[116px] max-w-[116px] min-h-[116px] max-h-[116px]"
              />
            </span>
            <span className="mt-5 text-black text-[14px]">
              {user.firstName} {user.lastName}
            </span>
            <Button type="button" className="w-full mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <span>Дивитися номер</span>
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full mt-3"
              onClick={async () => {
                if (
                  !connections.find((element) => IsChatAlreadyExist(element, user.id, profileId))
                ) {
                  await createUserConnection({ id: user.id });

                  await getProfile();
                }

                router.push(APP_ROUTES.CHATS, {
                  query: {
                    chatWith: user.id,
                  },
                  pathname: APP_ROUTES.CHATS,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
              </svg>
              <span>Повідомлення</span>
            </Button>
          </div>
          {/*<LocationItem location={{*/}
          {/*  category : "Лікарні",*/}
          {/*  items: [*/}
          {/*    { time: '1 хв', name: 'Український міжнародний центр сурогатного материнства (УМЦСМ)' },*/}
          {/*    { time: '2 хв', name: 'Сімейна клініка Амеда' },*/}
          {/*    { time: '4 хв', name: 'Медичний центр Мед Сіті' },*/}
          {/*  ],*/}
          {/*}}/>*/}
          <div className="mt-4 flex justify-center">
            <span className="text-red-400 font-medium" onClick={() => setOpen(true)}>
              Поскаржитись
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const {
    description,
    lat,
    lng,
    title,
    street,
    city,
    state,
    price,
    type,
    rooms,
    square,
    floorNumber,
    totalFloors,
    features,
    photos,
    user,
    createdAt,
    id,
    reviews,
    allowChildren,
    allowPets,
    wallsType,
    warmingType,
    buildAge,
    plan,
  } = await getApartment({
    id: params.id,
  });

  const reviewThresholds = {
    hospitals: 50,
    parks: 100,
    supermarkets: 20,
    shopping_malls: 500,
    educational_institutions: 5,
    transport_hubs: 2,
  };

  const MAX_COORDINATES_PER_REQUEST = 25;

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const types = {
    hospitals: ['hospital', 'doctor', 'dentist', 'pharmacy', 'physiotherapist', 'veterinary_care'],
    parks: ['park'],
    supermarkets: ['supermarket'],
    shopping_malls: ['shopping_mall'],
    educational_institutions: ['school', 'university'],
    transport_hubs: [
      'bus_station',
      'train_station',
      'subway_station',
      'transit_station',
      'taxi_stand',
    ],
  };

  const placeNames = {
    hospitals: 'Медицина',
    parks: 'Парки',
    supermarkets: 'Супермаркети',
    shopping_malls: 'Торгові центри',
    educational_institutions: 'Навчальні заклади',
    transport_hubs: 'Транспорт',
  };

  const allPlacesWithTime = [];

  for (const category in types) {
    const typeGroup = types[category];
    let places = [];

    for (const type of typeGroup) {
      const placesResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=uk&location=${lat},${lng}&radius=1500&type=${type}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
      );
      const filteredPlaces = placesResponse.data.results.filter(
        (place) => place.user_ratings_total >= reviewThresholds[category],
      );
      places.push(...filteredPlaces);
    }

    const destinationChunks = chunkArray(
      places.map((place) => `${place.geometry.location.lat},${place.geometry.location.lng}`),
      MAX_COORDINATES_PER_REQUEST,
    );

    let walkingTimesData = [];

    for (const chunk of destinationChunks) {
      const destinations = chunk.join('|');

      const distanceResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?language=uk&origins=${lat},${lng}&destinations=${destinations}&mode=walking&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
      );
      walkingTimesData = walkingTimesData.concat(
        distanceResponse.data.rows[0].elements.map((element) => element.duration.value),
      );
    }

    const placesWithTime = places.map((place, index) => ({
      name: place.name,
      walkingTime: walkingTimesData[index],
      ...place,
    }));

    placesWithTime.sort((a, b) => Number(a.walkingTime) - Number(b.walkingTime));

    allPlacesWithTime.push({
      type: placeNames[category],
      places: placesWithTime,
    });
  }

  return {
    props: {
      description,
      lat,
      lng,
      title,
      street,
      state,
      city,
      price,
      type,
      rooms,
      square,
      floorNumber,
      totalFloors,
      features,
      photos,
      user,
      createdAt,
      id,
      reviews,
      hospitals: [],
      places: allPlacesWithTime,
      allowPets,
      allowChildren,
      wallsType,
      plan,
      warmingType,
      buildAge,
    },
  };
}
