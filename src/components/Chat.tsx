import { ListOfContacts } from '@/components/Chat/ListOfContacts';
import { ChatField } from '@/components/Chat/ChatField';
import { useContext, useEffect } from 'react';
import { ChatContext } from '@/contexts/ChatContext';
import { useRouter } from 'next/router';

export const Chat = () => {
  const { dialogs, currentChatIndex, changeCurrentChatIndex } = useContext(ChatContext);

  const router = useRouter();

  useEffect(() => {
    console.log(dialogs);
  }, [dialogs]);

  useEffect(() => {
    if (router.query.chatWith) {
      for (let i = 0; i < dialogs.length; i++) {
        if (dialogs[i].with.id == router.query.chatWith) {
          changeCurrentChatIndex(i);
        }
      }
    }
  }, [router.query]);

  return (
    <div class="flex flex-1 border border-t">
      {dialogs.length && (
        <div class="flex flex-row justify-between bg-white flex-1">
          <ListOfContacts contacts={dialogs.map((d) => d.with)} />
          <ChatField messages={dialogs[currentChatIndex].messages} />
        </div>
      )}
    </div>
  );
};
