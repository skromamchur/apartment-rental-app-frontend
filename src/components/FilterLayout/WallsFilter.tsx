import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { APARTMENT_FILTERS } from '@/constants/ApartmentFilters';

export const WallsFilter = () => {
  const { wallsType, handleWallsTypeChange } = useContext(FilterContext);

  return (
    <CheckboxesField
      checkboxesOptions={
        APARTMENT_FILTERS.find((filterSection) => filterSection.id === 'walls').options
      }
      onChange={handleWallsTypeChange}
      value={wallsType}
    />
  );
};