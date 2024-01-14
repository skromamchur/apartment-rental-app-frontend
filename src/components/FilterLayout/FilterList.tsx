import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useContext } from 'react';
import { InputPrice } from '@/components/Inputs/InputPrice';
import { FilterContext } from '@/contexts/FilterContext';
import { CheckboxesField } from '@/components/Inputs/CheckboxesField';
import { PriceFilter } from '@/components/FilterLayout/PriceFilter';
import { FilterInputTab } from '@/components/FilterLayout/FilterInputTab';

export const FilterList = ({ filters, handleMinPriceChange, handleMaxPriceChange }) => {
  const { minPrice, maxPrice, roomsCount, handleRoomsCountChange } = useContext(FilterContext);

  return (
    <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
      {filters.map((section, sectionIdx) => (
        <Popover
          as="div"
          key={section.name}
          id={`desktop-menu-${sectionIdx}`}
          className="relative inline-block text-left"
        >
          <div>
            <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>{section.name}</span>
              {sectionIdx === 0 ? (
                <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                  {roomsCount.length}
                </span>
              ) : null}
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
                  <CheckboxesField
                    checkboxesOptions={section.options}
                    key={sectionIdx}
                    onChange={handleRoomsCountChange}
                    value={roomsCount}
                  />
                ) : (
                  <FilterInputTab sectionId={section.id} />
                )}
              </form>
            </Popover.Panel>
          </Transition>
        </Popover>
      ))}
    </Popover.Group>
  );
};
