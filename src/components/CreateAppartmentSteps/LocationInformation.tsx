import { FormCard } from '@/components/FormCard';

import { GoogleMapInput } from '@/components/Inputs/GoogleMapInput';
import React from 'react';

export const LocationInformation = () => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Location Information</h3>
      <GoogleMapInput />
    </FormCard>
  );
};
