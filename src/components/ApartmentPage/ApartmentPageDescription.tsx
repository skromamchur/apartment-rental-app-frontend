import { FormCard } from '@/components/FormCard';
import React from 'react';

export const ApartmentPageDescription = ({ description }) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Опис</h3>
      <div className="text-black text-opacity-50 whitespace-pre-line">{description}</div>
    </FormCard>
  );
};
