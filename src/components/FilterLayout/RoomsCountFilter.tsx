import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { APARTMENT_FILTERS } from '@/constants/ApartmentFilters';

export const RoomsCountFilter = () => {
  const { roomsCount, handleRoomsCountChange } = useContext(FilterContext);

  return (
    <CheckboxesField
      checkboxesOptions={
        APARTMENT_FILTERS.find((filterSection) => filterSection.id === 'roomsCount').options
      }
      onChange={handleRoomsCountChange}
      value={roomsCount}
    />
  );
};
