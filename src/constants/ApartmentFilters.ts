export const SORT_OPTIONS = [];

export const APARTMENT_FILTERS = [
  {
    id: 'rooms',
    name: 'Rooms',
    options: [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
    ],
    type: 'checkboxes',
  },
  {
    id: 'floors',
    name: 'Floors',
    options: [],
    type: 'inputs',
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [],
    type: 'inputs',
  },
  {
    id: 'prices',
    name: 'Prices',
    type: 'inputs',
    options: [],
  },
];
