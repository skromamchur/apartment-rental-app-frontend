import classNames from 'classnames';

export const FormCard = ({ children, className = '' }) => (
  <div
    className={classNames(
      'border border-gray-200 bg-white px-4 py-5 sm:px-6 shadow-sm rounded-lg',
      className,
    )}
  >
    {children}
  </div>
);
