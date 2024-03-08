import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Connection, IChatMessage, IReceivedMessage } from '@/types/ChatMessage';
import { UserInterface } from '@/types/User';
import { UserContext } from '@/contexts/UserContext';

type Dialog = {
  messages: IChatMessage[];
  with: UserInterface;
  id: number;
};

interface ChatContextInterface {
  dialogs: Dialog[];
  currentChatIndex: number;
  changeCurrentChatIndex: (newChatIndex: number) => void;
}

export const ChatContext = createContext<ChatContextInterface>(null);

export const ChatProvider = ({ children }) => {
  const { id, connections } = useContext(UserContext);

  const dialogs = useMemo(() => {
    let result: Dialog[] = [];

    if (connections) {
      connections.forEach((connection: Connection) => {
        result.push({
          with: connection.from.id === id ? connection.to : connection.from,
          messages: connection.messages.sort((m: IChatMessage, a: IChatMessage) => {
            return Number(new Date(m.createdAt)) - Number(new Date(a.createdAt));
          }),
          id: connection.id,
        });
      });
    }

    return result;
  }, [connections]);

  const [currentChatIndex, setCurrentChatIndex] = useState<number>(0);

  return (
    <ChatContext.Provider
      value={{
        dialogs,
        currentChatIndex,
        changeCurrentChatIndex: (index: number) => setCurrentChatIndex(index),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
