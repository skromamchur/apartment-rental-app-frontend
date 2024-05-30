import NextImage from 'next/image';
import classNames from 'classnames';

export const UserAvatar = ({
  avatar,
  size = 'small',
  className = '',
  alt = '',
}: {
  avatar: string;
  size?: 'small' | 'large';
  className?: string;
  alt?: string;
}) => {
  const width = size === 'small' ? 40 : 116;
  const height = size === 'small' ? 40 : 116;

  return (
    <img
      width={width}
      height={height}
      className={classNames('rounded-full object-cover flex-0 w-[40px] h-[40px] ', className)}
      src={avatar ?? '/empty-avatar.png'}
      alt={alt}
    />
  );
};
