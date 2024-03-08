import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { InputPrice } from '@/components/Inputs/InputPrice';

export const SquareFilter = () => {
  const { handleMinSquareChange, handleMaxSquareChange, maxSquare, minSquare } =
    useContext(FilterContext);

  return (
    <div className="flex flex-row space-x-4">
      <InputPrice
        label="Min Square"
        onChange={handleMinSquareChange}
        value={minSquare}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-ruler"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6B7280"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
            <path d="M4 8l2 0" />
            <path d="M4 12l3 0" />
            <path d="M4 16l2 0" />
            <path d="M8 4l0 2" />
            <path d="M12 4l0 3" />
            <path d="M16 4l0 2" />
          </svg>
        }
      />
      <InputPrice
        label="Max Square"
        onChange={handleMaxSquareChange}
        value={maxSquare}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-ruler"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6B7280"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
            <path d="M4 8l2 0" />
            <path d="M4 12l3 0" />
            <path d="M4 16l2 0" />
            <path d="M8 4l0 2" />
            <path d="M12 4l0 3" />
            <path d="M16 4l0 2" />
          </svg>
        }
      />
    </div>
  );
};
