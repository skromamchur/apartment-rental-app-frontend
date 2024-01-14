import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { InputPrice } from '@/components/Inputs/InputPrice';

export const SquareFilter = () => {
  const { handleMinSquareChange, handleMaxSquareChange, maxSquare, minSquare } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice label="Min Square" onChange={handleMinSquareChange} value={minSquare} />
      <InputPrice label="Max Square" onChange={handleMaxSquareChange} value={maxSquare} />
    </div>
  );
};
