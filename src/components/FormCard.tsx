import classNames from 'classnames';

export const FormCard = ({ children, className = '' }) => (
  <div
    className={classNames(
      'border border-gray-300 bg-white px-4 py-5 sm:px-6 shadow rounded-lg flex-1',
      className,
    )}
  >
    {children}
  </div>
);
