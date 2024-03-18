import classNames from 'classnames';
import { FlatCard } from '@/components/FlatCard';
import { MapOfAvailableArticles } from '@/components/MapOfAvailableArticles';
import { useContext, useEffect } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { useQuery } from '@tanstack/react-query';
import { getApartments } from '@/api/apartments';

export const HomeContent = ({ onChangeCount, onChangeCities, onChangeStates }) => {
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

  useEffect(() => {
    if (apartments) {
      onChangeCount(apartments.apartments.length);
      onChangeStates(apartments.states);
      onChangeCities(apartments.cities);
    }
  }, [apartments]);

  return (
    <div className="mx-auto w-full bg-gray-50 py-4 px-2">
      <div
        className={classNames(
          `w-full px-2 xl:px-0 max-w-[1280px] mx-auto`,
          !isLoading &&
            apartments &&
            apartments.apartments &&
            apartments.apartments.length > 0 &&
            'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] pb-8',
        )}
      >
        {!isLoading && apartments && apartments.apartments && (
          <>
            {apartments.apartments.map((ap) => {
              return (
                <FlatCard
                  photo={ap.photos.length ? ap.photos[0] : ''}
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
  );
};
