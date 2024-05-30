import { UserAvatar } from '@/components/UserAvatar';

export const UserContact = ({
  lastMessage,
  avatar,
  firstName,
  lastName,
  onClick,
}: {
  lastMessage: string;
  avatar: string;
  firstName: string;
  lastName: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex flex-row py-3 px-4 justify-center items-center border-b cursor-pointer space-x-4"
      onClick={onClick}
    >
      <div>
        <UserAvatar avatar={avatar} className="object-cover h-12 w-12 rounded-full" alt="" />
      </div>
      <div className="w-full">
        <div className="text-[#011627] font-semibold">
          {firstName} {lastName}
        </div>
        <span className="text-gray-500 text-sm line-clamp-1">{lastMessage}</span>
      </div>
    </div>
  );
};
