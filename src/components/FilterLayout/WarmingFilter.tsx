import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { APARTMENT_FILTERS } from '@/constants/ApartmentFilters';

export const WarmingFilter = () => {
  const { warmingType, handleWarmingTypeChange } = useContext(FilterContext);

  return (
    <CheckboxesField
      checkboxesOptions={
        APARTMENT_FILTERS.find((filterSection) => filterSection.id === 'warming').options
      }
      onChange={handleWarmingTypeChange}
      value={warmingType}
    />
  );
};