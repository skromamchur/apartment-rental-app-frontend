import { RoomsCountFilter } from '@/components/FilterLayout/RoomsCountFilter';
import { TypeFilter } from '@/components/FilterLayout/TypeFilter';
import {WarmingFilter} from "@/components/FilterLayout/WarmingFilter";
import {AllowPetsFilter} from "@/components/FilterLayout/AllowPets";
import {WallsFilter} from "@/components/FilterLayout/WallsFilter";

const FILTER_TABS = {
  roomsCount: RoomsCountFilter,
  type: TypeFilter,
  warming: WarmingFilter,
  pets: AllowPetsFilter,
  walls: WallsFilter
};

export const FilterCheckboxesType = ({ sectionId }: { sectionId: string }) => {
  const FilterSectionComponent = FILTER_TABS[sectionId];

  return <FilterSectionComponent />;
};
