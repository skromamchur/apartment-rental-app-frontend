import { FilterList } from '@/components/FilterLayout/FilterList';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';

export const DesktopFilterLayout = ({ filters, setOpen }) => {
  const { handleMinPriceChange, handleMaxPriceChange } = useContext(FilterContext);

  return (
    <div className="mx-auto max-w-3xl bg-white mt-8 shadow-md rounded-lg text-center px-4 lg:max-w-7xl">
      <section aria-labelledby="filter-heading" className="py-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            onClick={() => setOpen(true)}
          >
            Filters
          </button>
          <FilterList
            filters={filters}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
          />
        </div>
      </section>
    </div>
  );
};
