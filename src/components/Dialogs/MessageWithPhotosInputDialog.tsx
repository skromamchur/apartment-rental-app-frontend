import { DialogTemplate } from '@/components/base/DialogTemplate';
import { GenerateImagePreview } from '@/utils/GenerateImagePreview';
import axiosClient from '@/api/config/axios';
import { useContext, useRef } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { useForm } from 'react-hook-form';
import { ChatContext } from '@/contexts/ChatContext';

export const MessageWithPhotosInputDialog = ({ photos, startMessage }) => {
  const methods = useForm({
    defaultValues: {
      message: startMessage,
    },
  });
  const { dialogs, currentChatIndex } = useContext(ChatContext);
  const { getUser } = useContext(UserContext);
  const inputRef = useRef();

  const onSubmit = async ({ message }: { message: string }) => {
    const formData = new FormData();

    formData.append('toUserId', dialogs[currentChatIndex].with.id.toString());
    formData.append('text', message);

    Array.from(photos).forEach((photo: Blob) => {
      formData.append(`photos`, photo);
    });

    await axiosClient.post(`/connections/messages/${dialogs[currentChatIndex].id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    getUser();
  };

  return (
    <DialogTemplate>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          {Array.from(photos).map((file) => {
            const imag = GenerateImagePreview(file);

            return <img src={imag} className="h-full" />;
          })}
        </div>
        <input type="file" multiple className="hidden" ref={inputRef} />
        <input
          className="w-full bg-white h-full px-3 rounded-[12px] pl-12 outline-none border py-4 mt-6"
          type="text"
          placeholder="Message"
          {...methods.register('message')}
        />
      </form>
    </DialogTemplate>
  );
};
