import { FeatureItemCheckbox } from '@/components/Inputs/FeatureItemCheckbox';

import { INTERIOR_FEATURES } from '@/constants/InterriorFeatures';

export const FeaturesInformation = () => {
  return (
    <div className="grid cols-3">
      {INTERIOR_FEATURES.map((feature) => {
        return <FeatureItemCheckbox label={feature} />;
      })}
    </div>
  );
};
