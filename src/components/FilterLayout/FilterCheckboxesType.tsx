import { RoomsCountFilter } from '@/components/FilterLayout/RoomsCountFilter';
import { TypeFilter } from '@/components/FilterLayout/TypeFilter';

const FILTER_TABS = {
  roomsCount: RoomsCountFilter,
  type: TypeFilter,
};

export const FilterCheckboxesType = ({ sectionId }: { sectionId: string }) => {
  const FilterSectionComponent = FILTER_TABS[sectionId];

  return <FilterSectionComponent />;
};
