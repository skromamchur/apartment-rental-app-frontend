import { createContext, useEffect, useState } from 'react';
import { ROOMS_COUNT_OPTIONS } from '@/constants/RoomsCountOptions';
import { ApartmentDealType, ApartmentSortType } from '@/types/Apartament';

interface FilterContextInterface {
  search: string;
  minPrice: number;
  maxPrice: number;
  minSquare: number;
  maxSquare: number;
  minFloor: number;
  maxFloor: number;
  roomsCount: number[];
  state: string;
  city: string;
  warmingType : string[];
  allowPets : string[];
  allowChildren : string[];
  wallsType : string[];
  type: ApartmentDealType[];
  sortType: ApartmentSortType;
  handleSearchChange: (value: string) => void;
  handleMinPriceChange: (value: number) => void;
  handleMinSquareChange: (value: number) => void;
  handleMaxSquareChange: (value: number) => void;
  handleMaxPriceChange: (value: number) => void;
  handleMinFloorChange: (value: number) => void;
  handleMaxFloorChange: (value: number) => void;
  handleRoomsCountChange: (value: number[]) => void;
  handleTypeChange: (value: ApartmentDealType[]) => void;
  handleApartmentSortOptionChange: (value: ApartmentSortType) => void;
  handleStateChange: (value: string) => void;
  handleCityChange: (value: string) => void;
  handleWarmingTypeChange: (value: string[]) => void;
  handleAllowPets: (value: string[]) => void;
  handleAllowChildren: (value: string[]) => void;
  handleWallsTypeChange: (value : string[]) => void;
}

export const FilterContext = createContext<FilterContextInterface>(null);

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400000);
  const [minSquare, setMinSquare] = useState(0);
  const [maxSquare, setMaxSquare] = useState(500);
  const [minFloor, setMinFloor] = useState(0);
  const [maxFloor, setMaxFloor] = useState(100);
  const [roomsCount, setRoomsCount] = useState<number[]>(ROOMS_COUNT_OPTIONS);
  const [type, setType] = useState<ApartmentDealType[]>(['day', 'month', 'room', 'co-renting']);
  const [sortType, setSortType] = useState<ApartmentSortType>('DATE');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [warmingType, setWarmingType] = useState(['individual', 'center'])
  const [allowPets, setAllowPets] = useState(['allow', 'deny'])
  const [allowChildren, setAllowChildren] = useState(['allow', 'deny'])
  const [wallsType, setWallsType] = useState(['панельний', 'цегляний', 'газоблок'])

  useEffect(() => {
    setCity('');
  }, [state]);

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
        type,
        sortType,
        state,
        city,
        warmingType,
        allowPets,
        allowChildren,
        wallsType,
        handleSearchChange: (value: string) => setSearch(value),
        handleMaxPriceChange: (value: number) => setMaxPrice(value),
        handleMinPriceChange: (value: number) => setMinPrice(value),
        handleMinSquareChange: (value: number) => setMinSquare(value),
        handleMaxSquareChange: (value: number) => setMaxSquare(value),
        handleMinFloorChange: (value: number) => setMinFloor(value),
        handleMaxFloorChange: (value: number) => setMaxFloor(value),
        handleRoomsCountChange: (value: number[]) => setRoomsCount(value),
        handleTypeChange: (value: ApartmentDealType[]) => setType(value),
        handleApartmentSortOptionChange: (value: ApartmentSortType) => setSortType(value),
        handleStateChange: (value: string) => setState(value),
        handleCityChange: (value: string) => setCity(value),
        handleWarmingTypeChange: (value: string[]) => setWarmingType(value),
        handleAllowPets: (value: string[]) => setAllowPets(value),
        handleAllowChildren: (value: string[]) => setAllowChildren(value),
        handleWallsTypeChange: (value : string[]) => setWallsType(value)
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
