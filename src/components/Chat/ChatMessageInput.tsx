import { useForm, useWatch } from 'react-hook-form';
import {useContext, useEffect, useRef, useState} from 'react';
import { ChatContext } from '@/contexts/ChatContext';
import axiosClient from '@/api/config/axios';
import { UserContext } from '@/contexts/UserContext';
import { MessageWithPhotosInputDialog } from '@/components/Dialogs/MessageWithPhotosInputDialog';

export const ChatMessageInput = () => {
  const methods = useForm();
  const { dialogs, currentChatIndex } = useContext(ChatContext);
  const { getUser } = useContext(UserContext);

  const onSubmit = async ({ message }: { message: string }) => {
    const formData = new FormData();

    formData.append('toUserId', dialogs[currentChatIndex].with.id.toString());
    formData.append('text', message);

    // if (inputRef.current && inputRef.current.files) {
    //   Array.from(inputRef.current.files).forEach((photo: Blob) => {
    //     formData.append(`photos`, photo);
    //   });
    // }

    await axiosClient.post(`/connections/messages/${dialogs[currentChatIndex].id}`, {
      toUserId : dialogs[currentChatIndex].with.id.toString(),
      text : message
    });

    getUser();
  };

  const [startMessage, setStartMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>();
  
  useEffect(() => {
    if(inputRef.current) {
      console.log(inputRef.current.files)
    }
  }, [inputRef.current?.files])
  
  const [showPhotoModal, setShowPhotoModal] = useState<boolean>(false)

  return (
    <>
      {inputRef.current &&
        inputRef.current.files &&
        Array.from(inputRef.current.files).length > 0 && (
          <MessageWithPhotosInputDialog
            photos={inputRef.current.files}
            startMessage={startMessage}
          />
        )}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="h-[56px] w-[696px] mx-auto mb-4 relative">
          <input type="file" multiple className="hidden" ref={inputRef} onChange={() => {
            if(inputRef.current.files) {
              setShowPhotoModal(true)
            }
          }}/>
          <button
            type="button"
            onClick={() => {
              const values = methods.getValues();
              setStartMessage(values.message);
              inputRef.current.click();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-paperclip absolute top-4 left-4 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6B7280"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
            </svg>
          </button>
          <input
            className="w-full bg-white h-full px-3 rounded-[12px] pl-12 outline-none"
            type="text"
            placeholder="Повідомлення"
            {...methods.register('message')}
          />
        </div>
      </form>
    </>
  );
};
