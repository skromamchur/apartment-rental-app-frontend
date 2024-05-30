import { InputPrice } from '@/components/Inputs/InputPrice';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';

export const PriceFilter = () => {
  const { handleMaxPriceChange, handleMinPriceChange, maxPrice, minPrice } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice
        label="Від"
        onChange={handleMinPriceChange}
        value={minPrice}
        icon={<span className="text-gray-500 sm:text-sm">₴</span>}
      />
      <InputPrice
        label="До"
        onChange={handleMaxPriceChange}
        value={maxPrice}
        icon={<span className="text-gray-500 sm:text-sm">₴</span>}
      />
    </div>
  );
};
