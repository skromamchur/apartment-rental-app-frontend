import { Inter, Roboto } from 'next/font/google';
import { Header } from '@/components/Layout/Header';
import { FlatCard } from '@/components/FlatCard';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] });

import { useQuery } from '@tanstack/react-query';
import { getApartments } from '@/api/apartments';

import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import FilterLayout from '@/components/FilterLayout';
import { SearchInput } from '@/components/FilterLayout/SearchInput';
import { MapOfAvailableArticles } from '@/components/MapOfAvailableArticles';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';
import { APP_ROUTES } from '@/constants/routes/AppRoutes';
import Autocomplete from 'react-google-autocomplete';

import Select from 'react-select';

export const HomeShape = () => {
  const {
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
    handleStateChange,
    handleApartmentSortOptionChange,
    handleCityChange,
  } = useContext(FilterContext);

  const { data: apartments, isLoading } = useQuery({
    queryKey: [
      'apartments',
      search,
      minPrice,
      maxPrice,
      roomsCount,
      maxSquare,
      minSquare,
      minFloor,
      maxFloor,
      type,
      sortType,
      state,
      city,
    ],
    queryFn: () =>
      getApartments({
        search,
        minPrice,
        maxPrice,
        roomsCount,
        maxSquare,
        minSquare,
        minFloor,
        maxFloor,
        type,
        sortType,
        state,
        city,
      }),
  });

  const router = useRouter();

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden ${inter.className}`}
    >
      <Header />
      <div className="mx-auto max-w-[1280px] w-full mt-4">
        <FilterLayout />
        <SearchInput />
        <div className="flex flex-row justify-between">
          <div
            className={classNames(['flex flex-row space-x-3 items-center mt-6', roboto.className])}
          >
            <span className="text-[24px] text-black">Apartment for rental</span>
            {apartments && (
              <span className="font-light text-sm text-black text-opacity-50">
                ({apartments.apartments.length}) results found.
              </span>
            )}
          </div>
          <Button
            variant="secondary"
            className="mt-4 font-semibold ml-auto !mx-0"
            onClick={() => {
              router.push(APP_ROUTES.CREATE);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#6B7280"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            <span>Add advertisement</span>
          </Button>
        </div>
        <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          style={{ width: '100%' }}
          options={{
            componentRestrictions: { country: 'UA' },
          }}
          className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        {apartments && apartments.states && (
          <Select
            isClearable={true}
            options={apartments.states.map((element) => ({
              label: `${element.name} ${element.count}`,
              value: element.name,
            }))}
            value={{ label: state, value: state }}
            onChange={(newState) => {
              if (newState) {
                handleStateChange(newState.value);
              } else {
                handleStateChange('');
              }
            }}
          />
        )}
        {apartments && apartments.cities && state && (
          <Select
            isClearable={true}
            options={apartments.cities.map((element) => ({
              label: `${element.name} ${element.count}`,
              value: element.name,
            }))}
            value={{ label: city, value: city }}
            onChange={(newState) => {
              if (newState) {
                handleCityChange(newState.value);
              } else {
                handleCityChange('');
              }
            }}
          />
        )}

        <div
          className={`w-full py-8 px-2 xl:px-0 ${
            isLoading ? '' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]'
          }`}
        >
          {!isLoading && apartments && apartments.apartments && (
            <>
              {apartments.apartments.map((ap) => {
                return (
                  <FlatCard
                    photo={ap.photos.length ? ap.photos[0].filename : ''}
                    price={ap.price}
                    city={ap.city}
                    street={ap.street}
                    floorNumber={ap.floorNumber}
                    roomsCount={ap.rooms}
                    square={ap.square}
                    title={ap.title}
                    key={ap.id}
                    type={ap.type}
                    id={ap.id}
                    date={ap.createdAt}
                    titleClassname="min-h-[40px]"
                  />
                );
              })}
            </>
          )}
          {isLoading && (
            <div className="h-[400px] w-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin border-t-[transparent]"></div>
            </div>
          )}
        </div>
        {apartments && <MapOfAvailableArticles apartments={apartments.apartments} />}
      </div>
    </div>
  );
};
