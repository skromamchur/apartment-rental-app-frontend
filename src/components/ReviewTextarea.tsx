import React, { useContext, useState } from 'react';
import { FormCard } from '@/components/FormCard';
import axiosClient from '@/api/config/axios';
import { UserAvatar } from '@/components/UserAvatar';
import { UserContext } from '@/contexts/UserContext';
import { Button } from '@/components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ReviewTextArea = ({ id }: { id: number }) => {
  const [message, setMessage] = useState<string>('');

  const { avatar } = useContext(UserContext);

  const onSubmit = async () => {
    await axiosClient.post(`/reviews/${id}`, {
      rating: 5,
      text: message,
    });
    setMessage('');

    toast.success('Your review successfully saved!', {
      position: 'top-right',
    });
  };

  return (
    <FormCard>
      <ToastContainer hideProgressBar />
      <h3 className="text-base font-semibold leading-6 text-gray-900">Ваш відгук</h3>
      <div className="flex items-start space-x-4 mt-2">

        <div className="flex-shrink-0">
          <UserAvatar avatar={avatar} />
        </div>
        <div className="min-w-0 flex-1">
          <form action="#" className="relative">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300">
              <textarea
                rows={5}
                name="comment"
                id="comment"
                className="block w-full pl-3 resize-none outline-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Ваш відгук..."
                defaultValue={''}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <div className="py-2" aria-hidden="true">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
              <div className="flex-shrink-0"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" onClick={onSubmit}>
          Опублікувати
        </Button>
      </div>
    </FormCard>
  );
};
