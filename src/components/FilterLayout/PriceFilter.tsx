import { InputPrice } from '@/components/Inputs/InputPrice';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';

export const PriceFilter = () => {
  const { handleMaxPriceChange, handleMinPriceChange, maxPrice, minPrice } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice label="Min Price" onChange={handleMinPriceChange} value={minPrice} />
      <InputPrice label="Max Price" onChange={handleMaxPriceChange} value={maxPrice} />
    </div>
  );
};
