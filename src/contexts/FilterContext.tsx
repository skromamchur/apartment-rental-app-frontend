import { createContext, useState } from 'react';
import { ROOMS_COUNT_OPTIONS } from '@/constants/RoomsCountOptions';

interface FilterContextInterface {
  search: string;
  minPrice: number;
  maxPrice: number;
  minSquare: number;
  maxSquare: number;
  minFloor: number;
  maxFloor: number;
  roomsCount: number[];
  handleSearchChange: (value: string) => void;
  handleMinPriceChange: (value: number) => void;
  handleMinSquareChange: (value: number) => void;
  handleMaxSquareChange: (value: number) => void;
  handleMaxPriceChange: (value: number) => void;
  handleMinFloorChange: (value: number) => void;
  handleMaxFloorChange: (value: number) => void;
  handleRoomsCountChange: (value: number[]) => void;
}

export const FilterContext = createContext<FilterContextInterface>(null);

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000 * 1000);
  const [minSquare, setMinSquare] = useState(0);
  const [maxSquare, setMaxSquare] = useState(1000 * 1000);
  const [minFloor, setMinFloor] = useState(0);
  const [maxFloor, setMaxFloor] = useState(1000 * 1000);
  const [roomsCount, setRoomsCount] = useState<number[]>(ROOMS_COUNT_OPTIONS);

  return (
    <FilterContext.Provider
      value={{
        search,
        minPrice,
        maxPrice,
        minSquare,
        maxSquare,
        minFloor,
        maxFloor,
        roomsCount,
        handleSearchChange: (value: string) => setSearch(value),
        handleMaxPriceChange: (value: number) => setMaxPrice(value),
        handleMinPriceChange: (value: number) => setMinPrice(value),
        handleMinSquareChange: (value: number) => setMinSquare(value),
        handleMaxSquareChange: (value: number) => setMaxSquare(value),
        handleMinFloorChange: (value: number) => setMinFloor(value),
        handleMaxFloorChange: (value: number) => setMaxFloor(value),
        handleRoomsCountChange: (value: number[]) => setRoomsCount(value),
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
