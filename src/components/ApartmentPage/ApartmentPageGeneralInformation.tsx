import { FormCard } from '@/components/FormCard';
import React from 'react';

const Category = ({ children }) => <span className="text-black text-opacity-50">{children}</span>;

const Value = ({ children }) => <span className="text-black">{children}</span>;

export const ApartmentPageGeneralInformation = ({
  type,
  floorNumber,
  totalFloors,
  rooms,
  square,
  createdAt,
}) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">General Information</h3>
      <div className="flex flex-row justify-between mr-20">
        <div className="grid grid-cols-2 gap-x-1 mt-4 gap-y-2">
          <Category>Published Date</Category>
          <Value>
            {new Date(createdAt).toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Value>
          <Category>Advertise Status</Category>
          <Value>{`${type[0].toUpperCase()}${type.slice(1)}`} Rental</Value>
          <Category>Warming Type</Category>
          <Value>Natural Gas</Value>
        </div>
        <div className="grid grid-cols-2 gap-x-3 mt-4 gap-y-2">
          <Category>Building Age</Category>
          <Value>4</Value>
          <Category>Floor Location</Category>
          <Value>
            {floorNumber}/{totalFloors}
          </Value>
          <Category>Rooms</Category>
          <Value>{rooms}</Value>
        </div>
      </div>
    </FormCard>
  );
};
