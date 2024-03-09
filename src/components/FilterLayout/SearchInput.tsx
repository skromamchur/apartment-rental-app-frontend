import { SearchIcon } from '@/components/Icons/SearchIcon';
import { useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';

export const SearchInput = () => {
  const { handleSearchChange } = useContext(FilterContext);

  return (
    <div className="relative lg:min-w-[800px] bg-gray-400 rounded-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
        placeholder="Search..."
        required
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </div>
  );
};
