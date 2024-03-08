import { FormCard } from '@/components/FormCard';
import React from 'react';

export const ApartmentPageFeatures = ({ featuresNames }) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Features</h3>
      <div className="mt-4 grid grid-cols-3">
        {featuresNames.map((feature) => {
          return (
            <div className="flex flex-row space-x-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clip-path="url(#clip0_310_161)">
                  <path
                    d="M9.88771 1.31969C9.73424 1.16079 9.48102 1.15638 9.32212 1.30985C9.31879 1.31306 9.31551 1.31634 9.31227 1.31969L2.79508 7.83691L0.677882 5.71971C0.518976 5.56624 0.265758 5.57064 0.112289 5.72955C-0.0374297 5.88457 -0.0374297 6.13031 0.112289 6.28532L2.51229 8.68532C2.6685 8.84149 2.92169 8.84149 3.07788 8.68532L9.87787 1.88531C10.0368 1.73182 10.0412 1.4786 9.88771 1.31969Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_310_161">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{feature}</span>
            </div>
          );
        })}
      </div>
    </FormCard>
  );
};
