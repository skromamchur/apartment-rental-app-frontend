import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { InputPrice } from '@/components/Inputs/InputPrice';

export const FloorFilter = () => {
  const { handleMinFloorChange, handleMaxFloorChange, maxFloor, minFloor } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice label="Min Floor" onChange={handleMinFloorChange} value={minFloor} />
      <InputPrice label="Max Floor" onChange={handleMaxFloorChange} value={maxFloor} />
    </div>
  );
};
