import { Header } from '@/components/Layout/Header';

import { Chat } from '@/components/Chat';
import { Roboto } from 'next/font/google';
import { ChatContext, ChatProvider } from '@/contexts/ChatContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

const Chats = () => {
  const router = useRouter();

  return (
    <ChatProvider>
      <div
        className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden ${roboto.className}`}
      >
        <Header />
        <Chat />
      </div>
    </ChatProvider>
  );
};

export default Chats;
