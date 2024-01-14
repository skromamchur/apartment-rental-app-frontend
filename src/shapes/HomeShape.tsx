import { Inter, Roboto } from 'next/font/google';
import { Header } from '@/components/Layout/Header';
import { FlatCard } from '@/components/FlatCard';
import classNames from 'classnames';
import Index from '@/components/FilterLayout';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] });

import { useQuery } from '@tanstack/react-query';
import { getApartments } from '@/api/apartments';

import { useContext, useState } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import FilterLayout from '@/components/FilterLayout';

export const HomeShape = () => {
  const { search, minPrice, maxPrice, roomsCount, minSquare, maxSquare, minFloor, maxFloor } =
    useContext(FilterContext);

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
      }),
  });

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden ${inter.className}`}
    >
      <Header />
      <div className="mx-auto max-w-[1280px] w-full mt-8">
        <div className={classNames(['flex flex-row space-x-3 items-center', roboto.className])}>
          <span className="text-[24px] text-black">Apartment for rental</span>
          <span className="font-light text-sm text-black text-opacity-50">
            (12.324) results found.
          </span>
        </div>

        <FilterLayout />
        <div className="w-full py-8 grid grid-cols-4 gap-[20px]">
          {!isLoading && apartments && (
            <>
              {apartments.map((ap) => {
                return (
                  <FlatCard
                    photo={ap.photo}
                    price={ap.price}
                    city={ap.city}
                    street={ap.street}
                    floorNumber={ap.floorNumber}
                    roomsCount={ap.rooms}
                    square={ap.square}
                    title={ap.title}
                    key={ap.id}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
