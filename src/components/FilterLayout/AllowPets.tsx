import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { APARTMENT_FILTERS } from '@/constants/ApartmentFilters';

export const AllowPetsFilter = () => {
  const { allowPets, handleAllowPets } = useContext(FilterContext);

  return (
    <CheckboxesField
      checkboxesOptions={
        APARTMENT_FILTERS.find((filterSection) => filterSection.id === 'pets').options
      }
      onChange={handleAllowPets}
      value={allowPets}
    />
  );
};