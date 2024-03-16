import { useContext, useState } from 'react';
import { FormCard } from '@/components/FormCard';
import axiosClient from '@/api/config/axios';
import { UserAvatar } from '@/components/UserAvatar';
import { UserContext } from '@/contexts/UserContext';

export const ReviewTextArea = ({ id }: { id: number }) => {
  const [message, setMessage] = useState<string>('');

  const { avatar } = useContext(UserContext);

  const onSubmit = async () => {
    await axiosClient.post(`/reviews/${id}`, {
      rating: 5,
      text: message,
    });
    setMessage('');
  };

  return (
    <FormCard>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <UserAvatar avatar={avatar} />
        </div>
        <div className="min-w-0 flex-1">
          <form action="#" className="relative">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full pl-3 resize-none outline-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Add your comment..."
                defaultValue={''}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="py-2" aria-hidden="true">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={onSubmit}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormCard>
  );
};
