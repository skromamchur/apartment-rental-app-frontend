import { FilterProvider } from '@/contexts/FilterContext';
import { HomeShape } from '@/shapes/HomeShape';

const HomePage = () => (
  <FilterProvider>
    <HomeShape />
  </FilterProvider>
);

export default HomePage;
