import { Header } from '@/components/Layout/Header';
import { Roboto } from 'next/font/google';
const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getApartment } from '@/api/apartments';

import React, { useContext } from 'react';
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
}) => {
  const router = useRouter();

  const { connections, id: profileId, isAuth } = useContext(UserContext);

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden pb-20 ${inter.className}`}
    >
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
          />
          <ApartmentPageDescription description={description} />
          <ApartmentPageLocationInformation lat={lat} lng={lng} />
          <ApartmentPageFeatures featuresNames={features.map((feature) => feature.name)} />
          {reviews.length > 0 && <ReviewList reviews={reviews} />}

          {isAuth && <ReviewTextArea id={id} />}
        </div>
        <div className="w-[260px] mt-[132px]">
          <div className="bg-white border border-opacity-10 py-5 px-10 flex flex-col items-center">
            <span className="relative inline-block">
              <UserAvatar avatar={user.avatar} size="large" />
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
              <span>View phone</span>
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
              <span>Send message</span>
            </Button>
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
  } = await getApartment({
    id: params.id,
  });

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
    },
  };
}
