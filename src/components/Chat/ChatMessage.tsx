import { GetMessageTime } from '@/utils/GetMessageTime';
import classNames from "classnames";

const Photos = ({ photos }) => {
  return (
    <div className={classNames("grid  gap-[16px] cursor-pointer", photos &&  photos.length >= 2 &&  "grid-cols-2")}>
      {photos && photos.map((photo) => {
        return <img src={photo} alt="" className="h-[200px] object-cover" />;
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
  viewed
}) => {
  if (isReceived) {
    return (
      <div className="flex items-start gap-2.5 ml-auto max-w-[560px]">
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
      <div className="flex items-start gap-2.5 mr-auto max-w-[560px]">
        <div className="flex flex-col gap-1 w-full min-w-[120px] ">
          <div className="flex flex-col leading-1.5 p-4 bg-white rounded-2xl flex-0 relative">
            <p className="text-sm font-normal text-gray-900 dark:text-white">{message}</p>
            <Photos photos={photos} />
            { viewed && <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-check absolute bottom-1 right-3" width="16"
                 height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
              <path
                d="M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032"/>
              <path d="M15 19l2 2l4 -4"/>
            </svg>}
          </div>
          <div className="flex text-xs text-gray-400">{GetMessageTime(createdAt)}</div>
        </div>
      </div>
    );
  }
};
