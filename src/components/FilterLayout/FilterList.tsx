import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useContext } from 'react';
import { FilterContext } from '@/contexts/FilterContext';
import { FilterInputTab } from '@/components/FilterLayout/FilterInputTab';
import { FilterCheckboxesType } from '@/components/FilterLayout/FilterCheckboxesType';
import Select from 'react-select';
import { SORT_OPTIONS } from '@/constants/ApartmentFilters';

export const FilterList = ({ filters, handleMinPriceChange, handleMaxPriceChange }) => {
  const { sortType, handleApartmentSortOptionChange } = useContext(FilterContext);

  return (
    <>
      <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-6">
        {filters.map((section, sectionIdx) => (
          <Popover
            as="div"
            key={section.name}
            id={`desktop-menu-${sectionIdx}`}
            className="relative inline-block text-left"
          >
            <div>
              <Popover.Button className="group inline-flex text-black text-[13px] items-center font-[300] justify-between text-[13px] px-2 rounded-[5px] outline-none border-opacity-30 border h-[35px] w-[135px]">
                <span>{section.name}</span>
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <form className="space-y-4">
                  {section.type === 'checkboxes' ? (
                    <FilterCheckboxesType sectionId={section.id} />
                  ) : (
                    <FilterInputTab sectionId={section.id} />
                  )}
                </form>
              </Popover.Panel>
            </Transition>
          </Popover>
        ))}
      </Popover.Group>
      <Select
        onChange={({ value }) => handleApartmentSortOptionChange(value)}
        options={SORT_OPTIONS}
        value={SORT_OPTIONS.find((option) => option.value === sortType)}
        className="flex-1 ml-12"
      />
    </>
  );
};
