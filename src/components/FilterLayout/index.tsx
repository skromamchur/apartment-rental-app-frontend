import { useContext, useState } from 'react';
import { SearchInput } from '@/components/FilterLayout/SearchInput';
import { MobileFilterLayout } from '@/components/FilterLayout/MobileFilterLayout';
import { DesktopFilterLayout } from '@/components/FilterLayout/DesktopFilterLayout';

import { APARTMENT_FILTERS, SORT_OPTIONS } from '@/constants/ApartmentFilters';
import { FilterContext } from '@/contexts/FilterContext';

const FilterLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <MobileFilterLayout filters={APARTMENT_FILTERS} setOpen={setOpen} show={open} />
      <DesktopFilterLayout
        filters={APARTMENT_FILTERS}
        setOpen={setOpen}
        sortOptions={SORT_OPTIONS}
      />
    </div>
  );
};

export default FilterLayout;
