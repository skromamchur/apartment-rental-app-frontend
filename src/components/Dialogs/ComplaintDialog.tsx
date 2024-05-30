import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@/components/Button';
import axiosClient from '@/api/config/axios';

export const ComplaintDialog = ({ apartmentId, userId, open, setOpen }) => {
  const [text, setText] = useState<string>('');

  const onSubmit = async () => {
    axiosClient.post('/complaints', {
      text,
      apartmentId,
      userId,
    });
    setOpen(false);
  };

  return (
    <Transition show={open}>
      <Dialog className="relative z-[1000]" onClose={setOpen}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 min-w-[520px]">
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Опишіть Вашу скаргу
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={10}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-4 resize-none outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Опишіть Вашу скаргу..."
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <Button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onSubmit}
                    variant="primary"
                  >
                    Надіслати
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
