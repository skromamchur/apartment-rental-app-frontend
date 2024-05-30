import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { InputPrice } from '@/components/Inputs/InputPrice';

export const FloorFilter = () => {
  const { handleMinFloorChange, handleMaxFloorChange, maxFloor, minFloor } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice
        label="Від"
        onChange={handleMinFloorChange}
        value={minFloor}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-elevator"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#6B7280"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
          </svg>
        }
      />
      <InputPrice
        label="До"
        onChange={handleMaxFloorChange}
        value={maxFloor}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-elevator"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#6B7280"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
          </svg>
        }
      />
    </div>
  );
};
