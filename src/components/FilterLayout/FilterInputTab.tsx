import { PriceFilter } from '@/components/FilterLayout/PriceFilter';
import { SquareFilter } from '@/components/FilterLayout/SquareFilter';
import { FloorFilter } from '@/components/FilterLayout/FloorFilter';

const FILTER_TABS = {
  prices: PriceFilter,
  sizes: SquareFilter,
  floors: FloorFilter,
};

export const FilterInputTab = ({ sectionId }: { sectionId: string }) => {
  const FilterTabComponent = FILTER_TABS[sectionId];

  return <FilterTabComponent />;
};
