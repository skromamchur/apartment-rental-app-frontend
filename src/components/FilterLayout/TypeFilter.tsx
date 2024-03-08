import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { APARTMENT_FILTERS } from '@/constants/ApartmentFilters';

export const TypeFilter = () => {
  const { type, handleTypeChange } = useContext(FilterContext);

  return (
    <CheckboxesField
      checkboxesOptions={
        APARTMENT_FILTERS.find((filterSection) => filterSection.id === 'type').options
      }
      onChange={handleTypeChange}
      value={type}
    />
  );
};
