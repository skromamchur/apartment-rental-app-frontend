import { useContext, useRef, useState } from 'react';
import { useController } from 'react-hook-form';

import ReactCrop, { type Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { Dialog, Transition } from '@headlessui/react';

import { Fragment } from 'react';
import { canvasPreview } from '@/utils/CanvasPreview';
import { Button } from '@/components/Button';
import { UserContext } from '@/contexts/UserContext';

export const SettingsAvatarInput = () => {
  const {
    field: { value, onChange },
  } = useController({
    name: 'avatar',
  });

  const { avatar } = useContext(UserContext);

  const [open, setOpen] = useState(true);
  const [chosenImage, setChosenImage] = useState<string>(avatar);
  const [showCropImage, setShowCropImage] = useState<boolean>(false);

  const imageFieldRef = useRef(null);

  const [crop, setCrop] = useState<Crop>(null);

  const onChangeAvatarButtonClick = () => {
    imageFieldRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setChosenImage(reader.result as string);
      setShowCropImage(true);
    };
    reader.readAsDataURL(file);
  };

  const onDeleteAvatar = () => {
    onChange(null);
  };

  const ref = useRef();
  const imageRef = useRef();

  const onSave = () => {
    onChange(canvasPreview(imageRef.current, ref.current, crop as PixelCrop));
    setShowCropImage(false);
  };

  const onCancel = () => {
    setShowCropImage(false);
  };

  return (
    <>
      {showCropImage && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
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
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg min-w-[650px] bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <ReactCrop crop={crop} onChange={(c) => setCrop(c)} circularCrop={true}>
                      <img
                        src={chosenImage}
                        ref={imageRef}
                        crossOrigin="anonymous"
                        className="min-w-[650px]"
                      />

                      <canvas ref={ref} className="hidden" />
                    </ReactCrop>
                    <div className="flex flex-row justify-end mt-4 space-x-4">
                      <Button
                        type="button"
                        onClick={onCancel}
                        variant="secondary"
                        className="min-w-[80px] mx-0"
                      >
                        Скасувати
                      </Button>
                      <Button type="button" onClick={onSave} className="min-w-[80px] mx-0">
                        Зберегти
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      <div className="sm:col-span-6">
        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-slate-900">
          Фотографія
        </label>
        <div className="mt-2 flex items-center">
          <img
            className="inline-block h-20 w-20 rounded-full"
            src={value ?? '/empty-avatar.png'}
            alt=""
          />
          <div className="relative ml-4">
            <input
              id="user-photo"
              name="user-photo"
              type="file"
              className="peer absolute inset-0 h-full w-full rounded-md opacity-0"
              onChange={onFileChange}
            />
            <label
              htmlFor="user-photo"
              className="pointer-events-none block rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 peer-hover:bg-slate-50 peer-focus:ring-2 peer-focus:ring-blue-600"
            >
              <span>Змінити</span>
            </label>
          </div>
          {value && (
            <button
              type="button"
              className="ml-6 text-sm font-medium leading-6 text-slate-900"
              onClick={onDeleteAvatar}
            >
              Видалити
            </button>
          )}
        </div>
      </div>
    </>
  );
};
