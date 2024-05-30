import { DialogTemplate } from '@/components/base/DialogTemplate';
import { GenerateImagePreview } from '@/utils/GenerateImagePreview';
import axiosClient from '@/api/config/axios';
import { useContext, useRef } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { useForm } from 'react-hook-form';
import { ChatContext } from '@/contexts/ChatContext';
import {getDownloadURL, getStorage, ref, uploadBytes} from "@firebase/storage";
import {firebaseApp} from "@/config/firebase";
import {generateUUID} from "@/utils/GenerateUUID";

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

    const photosLinksPromises = Array.from(photos).map(async (photo: Blob) => {
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `/messages/${generateUUID()}`);

      await uploadBytes(storageRef, photo);

      return await getDownloadURL(storageRef);
    });
    
    const photosLinks = await Promise.all(photosLinksPromises);

    await axiosClient.post(`/connections/messages/${dialogs[currentChatIndex].id}`, {
      toUserId : dialogs[currentChatIndex].with.id.toString(),
      text : message,
      photos : photosLinks
    });

    getUser();
  };

  return (
    <DialogTemplate>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          {Array.from(photos).map((file: File) => {
            const imag = GenerateImagePreview(file);

            return <img src={imag} className="h-full" />;
          })}
        </div>
        <input type="file" multiple className="hidden" ref={inputRef} />
        <input
          className="w-full bg-white h-full px-3 rounded-[12px] pl-4 outline-none border py-4 mt-6"
          type="text"
          placeholder="Повідомлення"
          {...methods.register('message')}
        />
      </form>
    </DialogTemplate>
  );
};
