import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Checkbox = ({ onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <div
      className={classNames(
        'w-5 h-5 rounded-3 border border-opacity-30 rounded-[3px] cursor-pointer items-center justify-center flex',
        { 'bg-red-500': checked },
      )}
      onClick={() => setChecked((prev) => !prev)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 10 8" fill="none">
        <path
          d="M9.88771 0.319694C9.73424 0.160788 9.48102 0.156382 9.32212 0.30985C9.31879 0.313061 9.31551 0.316343 9.31227 0.319694L2.79508 6.83691L0.677882 4.71971C0.518976 4.56624 0.265758 4.57064 0.112289 4.72955C-0.0374297 4.88457 -0.0374297 5.13031 0.112289 5.28532L2.51229 7.68532C2.6685 7.84149 2.92169 7.84149 3.07788 7.68532L9.87787 0.885311C10.0368 0.731819 10.0412 0.4786 9.88771 0.319694Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
