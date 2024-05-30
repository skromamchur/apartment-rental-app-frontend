import { ChatMessage } from '@/components/Chat/ChatMessage';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { ChatMessageInput } from '@/components/Chat/ChatMessageInput';
import { ChatContext } from '@/contexts/ChatContext';
import { UserAvatar } from '@/components/UserAvatar';

export const ChatField = ({ messages }) => {
  const { id } = useContext(UserContext);

  const { currentChatIndex, dialogs } = useContext(ChatContext);

  return (
    <div className="w-full flex flex-col justify-between bg-gray-200">
      <div className="flex flex-row items-center bg-white w-full px-8 py-4 space-x-2">
        <UserAvatar avatar={dialogs[currentChatIndex].with.avatar} size="small" />
        <span className="text-gray-900 font-medium">
          {dialogs[currentChatIndex].with.firstName} {dialogs[currentChatIndex].with.lastName}
        </span>
      </div>
      <div className="w-[696px] mx-auto flex flex-col mt-5 space-y-2 h-[calc(100vh-302px)] overflow-y-scroll no-scrollbar">
        {messages.map((message) => (
          <ChatMessage
            message={message.text}
            avatar={message.from.avatar}
            isReceived={message.from.id !== id}
            firstName={message.from.firstName}
            lastName={message.from.lastName}
            createdAt={message.createdAt}
            photos={message.photos}
            viewed={message.id != 18}
          />
        ))}
      </div>
      <ChatMessageInput />
    </div>
  );
};
