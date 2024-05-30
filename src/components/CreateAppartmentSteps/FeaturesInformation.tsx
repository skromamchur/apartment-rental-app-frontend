import { FeatureItemCheckbox } from '@/components/Inputs/FeatureItemCheckbox';

import { INTERIOR_FEATURES } from '@/constants/InterriorFeatures';
import React from 'react';
import { FormCard } from '@/components/FormCard';
import { useController } from 'react-hook-form';

export const FeaturesInformation = () => {
  const {
    field: { onChange, value },
  } = useController({
    name: 'features',
    defaultValue: [],
  });

  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Основні зручності</h3>
      <div className="mt-4 grid grid-cols-3">
        {INTERIOR_FEATURES.map((feature) => {
          return (
            <FeatureItemCheckbox
              label={feature}
              onChange={(newValue) => {
                if (newValue) {
                  onChange([...value, feature]);
                } else {
                  onChange(value.filter((item) => item !== feature));
                }
              }}
            />
          );
        })}
      </div>
    </FormCard>
  );
};
