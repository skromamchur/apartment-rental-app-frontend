import { FormCard } from '@/components/FormCard';
import React from 'react';
import { ApartmentDealType } from '@/types/Apartament';

const Category = ({ children }) => <span className="text-black text-opacity-50">{children}</span>;

const Value = ({ children }) => <span className="text-black">{children}</span>;

const getTypeLabel = (type: ApartmentDealType) => {
  switch (type) {
    case 'co-renting':
      return 'Спільна оренда';
      break;
    case 'day':
      return 'Подобово';
      break;
    case 'room':
      return 'Кімната';
      break;
    case 'month':
      return 'Довгостроково';
      break;
  }
};

export const ApartmentPageGeneralInformation = ({
  type,
  floorNumber,
  totalFloors,
  rooms,
  square,
  createdAt,
  allowPets,
  allowChildren,
  wallsType,
  warmingType,
  plan,
  buildAge,
}) => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Загальна інформація</h3>
      <div className="flex flex-row justify-between mr-20">
        <div className="grid grid-cols-2 gap-x-1 mt-4 gap-y-2">
          <Category>Дата публікації</Category>
          <Value>
            {new Date(createdAt).toLocaleString('uk', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Value>
          <Category>Тип оренди</Category>
          <Value>{getTypeLabel(type)}</Value>
          <Category>Тип опалення</Category>
          <Value>{warmingType === 'individual' ? 'Індивідуальне' : 'Централізоване'}</Value>
          <Category>Санвузол</Category>
          <Value>{plan === 'separate' ? 'Роздільний' : 'Суміжний'}</Value>
          <Category>Домашні улюбленці</Category>
          <Value>{allowPets ? 'Так' : 'Ні'}</Value>
        </div>
        <div className="grid grid-cols-2 gap-x-3 mt-4 gap-y-2">
          <Category>Вік будівлі</Category>
          <Value>{buildAge}</Value>
          <Category>Розташування поверху</Category>
          <Value>
            {floorNumber}/{totalFloors}
          </Value>
          <Category>Кількість кімнат</Category>
          <Value>{rooms}</Value>
          <Category>Тип стін</Category>
          <Value>{wallsType ? wallsType[0].toUpperCase() + wallsType.slice(1) : ''}</Value>
          <Category>Маленькі діти</Category>
          <Value>{allowChildren ? 'Так' : 'Ні'}</Value>
        </div>
      </div>
    </FormCard>
  );
};
