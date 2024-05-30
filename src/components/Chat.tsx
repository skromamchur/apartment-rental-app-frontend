import { ListOfContacts } from '@/components/Chat/ListOfContacts';
import { ChatField } from '@/components/Chat/ChatField';
import { useContext, useEffect } from 'react';
import { ChatContext } from '@/contexts/ChatContext';
import { useRouter } from 'next/router';

export const Chat = () => {
  const { dialogs, currentChatIndex, changeCurrentChatIndex } = useContext(ChatContext);

  const router = useRouter();

  useEffect(() => {
    if (router.query.chatWith) {
      for (let i = 0; i < dialogs.length; i++) {
        if (dialogs[i].with.id === Number(router.query.chatWith)) {
          changeCurrentChatIndex(i);
        }
      }
    }
  }, [router.query]);

  return (
    <div className="flex flex-1 border border-t">
      {dialogs.length && (
        <div className="flex flex-row justify-between bg-white flex-1">
          <ListOfContacts contacts={dialogs.map((d) => d.with)} />
          <ChatField messages={dialogs[currentChatIndex].messages} />
        </div>
      )}
    </div>
  );
};
