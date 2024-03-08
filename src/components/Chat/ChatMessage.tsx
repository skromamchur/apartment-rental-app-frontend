import { GetMessageTime } from '@/utils/GetMessageTime';

const Photos = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 gap-[16px] cursor-pointer">
      {photos.map((photo) => {
        return <img src={photo.filename} alt="" className="min-w-[300px] h-[200px] object-fit" />;
      })}
    </div>
  );
};

export const ChatMessage = ({
  message,
  avatar,
  isReceived,
  firstName,
  lastName,
  createdAt,
  photos,
}) => {
  if (isReceived) {
    return (
      <div className="flex items-start gap-2.5 ml-auto">
        <div className="flex flex-col gap-1 w-full min-w-[120px]">
          <div className="flex flex-col leading-1.5 p-4 bg-[#78E378] rounded-xl flex-0">
            <p className="text-sm font-normal text-gray-900 dark:text-white">{message}</p>
            <Photos photos={photos} />
          </div>
          <div className="flex text-xs text-gray-400">{GetMessageTime(createdAt)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-start gap-2.5 mr-auto">
        <div className="flex flex-col gap-1 w-full min-w-[120px] ">
          <div className="flex flex-col leading-1.5 p-4 bg-white rounded-2xl flex-0">
            <p className="text-sm font-normal text-gray-900 dark:text-white">{message}</p>
            <Photos photos={photos} />
          </div>
          <div className="flex text-xs text-gray-400">{GetMessageTime(createdAt)}</div>
        </div>
      </div>
    );
  }
};
