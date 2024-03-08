import { FormCard } from '@/components/FormCard';
import React from 'react';

export const ApartmentPageDescription = ({ description }) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Description</h3>
      <p className="text-black text-opacity-50">{description}</p>
    </FormCard>
  );
};
