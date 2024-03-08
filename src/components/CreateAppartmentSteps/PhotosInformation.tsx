import { FormCard } from '@/components/FormCard';

import { useController } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { GenerateImagePreview } from '@/utils/GenerateImagePreview';
import NextImage from 'next/image';

import { IconTrash } from '@tabler/icons-react';

const ImagesList = ({ images, onDelete }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,200px)] gap-4 w-full items-start">
      {images.map((preview, index) => {
        return (
          <div className="relative">
            <NextImage src={preview} alt="" width="190" height="145" className="object-fit" />
            <button
              type="button"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50"
              onClick={() => onDelete(index)}
            >
              <IconTrash />
            </button>
          </div>
        );
      })}{' '}
    </div>
  );
};

const EmptyState = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path
        d="M24.0234 11.5234H13.4766V0.976562C13.4766 0.437207 13.0394 0 12.5 0C11.9606 0 11.5234 0.437207 11.5234 0.976562V11.5234H0.976562C0.437207 11.5234 0 11.9606 0 12.5C0 13.0394 0.437207 13.4766 0.976562 13.4766H11.5234V24.0234C11.5234 24.5628 11.9606 25 12.5 25C13.0394 25 13.4766 24.5628 13.4766 24.0234V13.4766H24.0234C24.5628 13.4766 25 13.0394 25 12.5C25 11.9606 24.5628 11.5234 24.0234 11.5234Z"
        fill="#E02828"
      />
    </svg>
    <span>You can add 30 photos to your ad</span>
  </>
);

export const PhotosInformation = () => {
  const { field } = useController({
    name: 'photos',
    defaultValue: [],
  });

  const fileInputRef = useRef<HTMLInputElement>();

  const [imagesPreview, setImagesPreview] = useState<any[]>([]);

  const triggerFileModal = () => {
    fileInputRef.current.click();
  };

  const updateFileList = (index) => {
    const dt = new DataTransfer();

    for (let i = 0; i < fileInputRef.current.files.length; i++) {
      const file = fileInputRef.current.files[i];
      if (index !== i) dt.items.add(file); // here you exclude the file. thus removing it.
    }

    console.log(fileInputRef.current.files);
    console.log(dt.files);

    fileInputRef.current.files = dt.files; // Assign the updates list

    field.onChange(dt.files);
  };

  const onDelete = (index) => {
    const updatedImagesPreview = [...imagesPreview];
    updatedImagesPreview.splice(index, 1);
    setImagesPreview(updatedImagesPreview);
    updateFileList(index);
  };

  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Posting Photos</h3>
      <div className="flex flex-col justify-center items-center mt-5 mb-8 space-y-[15px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M31.25 5.00012L3.75 5.00012C1.67893 5.00012 0 6.67905 0 8.75012L0 26.2501C0 28.3211 1.67893 30.0001 3.75 30.0001L31.25 30.0001C33.3211 30.0001 35 28.3211 35 26.2501V8.75012C35 6.67905 33.3211 5.00012 31.25 5.00012ZM32.5 26.2501C32.5 26.9405 31.9403 27.5001 31.2499 27.5001L3.75 27.5001C3.05962 27.5001 2.49997 26.9405 2.49997 26.2501V25.5176L7.49999 20.5176L11.6163 24.6338C12.1044 25.1219 12.8957 25.1219 13.3838 24.6338L23.75 14.2676L32.5 23.0176V26.2501H32.5ZM32.5 19.4826L24.6337 11.6164C24.1457 11.1284 23.3544 11.1284 22.8663 11.6164L12.5 21.9826L8.38373 17.8663C7.89565 17.3783 7.10434 17.3783 6.61625 17.8663L2.49997 21.9826L2.49997 8.75012C2.49997 8.05974 3.05962 7.5001 3.75 7.5001L31.25 7.5001C31.9404 7.5001 32.5 8.05974 32.5 8.75012V19.4826H32.5Z"
            fill="black"
            fill-opacity="0.5"
          />
          <path
            d="M11.25 10C9.17893 10 7.5 11.6789 7.5 13.75C7.5 15.8211 9.17893 17.5 11.25 17.5C13.3211 17.5 15 15.8211 15 13.75C15 11.6789 13.3211 10 11.25 10ZM11.25 15C10.5596 15 9.99998 14.4404 9.99998 13.75C9.99998 13.0596 10.5596 12.5 11.25 12.5C11.9404 12.5 12.5 13.0596 12.5 13.75C12.5 14.4404 11.9404 15 11.25 15Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
        <span>You can add 30 photos to your ad</span>
        <button
          className="flex flex-row space-x-[13px] bg-[#E02828] rounded-[5px] text-white items-center justify-center py-[10px] px-4"
          onClick={triggerFileModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_265_423)">
              <path
                d="M19.3346 4.58174C18.9354 4.16349 18.384 3.91634 17.7567 3.91634H14.6008V3.87832C14.6008 3.40304 14.4106 2.94676 14.0875 2.64258C13.7643 2.31939 13.327 2.12927 12.8517 2.12927H7.14829C6.65399 2.12927 6.21673 2.31939 5.89354 2.64258C5.57034 2.96577 5.38023 3.40304 5.38023 3.87832V3.91634H2.24335C1.61597 3.91634 1.06464 4.16349 0.665399 4.58174C0.26616 4.98098 0 5.55133 0 6.15969V15.6274C0 16.2547 0.247148 16.8061 0.665399 17.2053C1.06464 17.6046 1.63498 17.8707 2.24335 17.8707H17.7567C18.384 17.8707 18.9354 17.6236 19.3346 17.2053C19.7338 16.8061 20 16.2357 20 15.6274V6.15969C20 5.53231 19.7529 4.98098 19.3346 4.58174ZM19.0114 15.6274H18.9924C18.9924 15.9696 18.8593 16.2738 18.6312 16.5019C18.403 16.73 18.0989 16.8631 17.7567 16.8631H2.24335C1.90114 16.8631 1.59696 16.73 1.36882 16.5019C1.14068 16.2738 1.0076 15.9696 1.0076 15.6274V6.15969C1.0076 5.81749 1.14068 5.5133 1.36882 5.28517C1.59696 5.05703 1.90114 4.92395 2.24335 4.92395H5.91255C6.19772 4.92395 6.42586 4.69581 6.42586 4.41064V3.85931C6.42586 3.65018 6.5019 3.46007 6.63498 3.32699C6.76806 3.19391 6.95818 3.11787 7.1673 3.11787H12.8517C13.0608 3.11787 13.251 3.19391 13.384 3.32699C13.5171 3.46007 13.5932 3.65018 13.5932 3.85931V4.41064C13.5932 4.69581 13.8213 4.92395 14.1065 4.92395H17.7757C18.1179 4.92395 18.4221 5.05703 18.6502 5.28517C18.8783 5.5133 19.0114 5.81749 19.0114 6.15969V15.6274Z"
                fill="white"
              />
              <path
                d="M10.0001 6.21667C8.70727 6.21667 7.52857 6.749 6.69206 7.5855C5.83655 8.44101 5.32324 9.60071 5.32324 10.8935C5.32324 12.1863 5.85556 13.365 6.69206 14.2015C7.54758 15.057 8.70727 15.5703 10.0001 15.5703C11.2928 15.5703 12.4715 15.038 13.308 14.2015C14.1636 13.346 14.6769 12.1863 14.6769 10.8935C14.6769 9.60071 14.1445 8.422 13.308 7.5855C12.4715 6.749 11.2928 6.21667 10.0001 6.21667ZM12.5856 13.4981C11.9202 14.1444 11.0077 14.5627 10.0001 14.5627C8.99244 14.5627 8.0799 14.1444 7.4145 13.4981C6.7491 12.8327 6.34986 11.9201 6.34986 10.9125C6.34986 9.90489 6.76811 8.99234 7.4145 8.32694C8.0799 7.66154 8.99244 7.2623 10.0001 7.2623C11.0077 7.2623 11.9202 7.68055 12.5856 8.32694C13.251 8.99234 13.6502 9.90489 13.6502 10.9125C13.6693 11.9201 13.251 12.8327 12.5856 13.4981Z"
                fill="white"
              />
              <path
                d="M16.7685 8.06087C17.283 8.06087 17.7 7.6438 17.7 7.12931C17.7 6.61483 17.283 6.19775 16.7685 6.19775C16.254 6.19775 15.8369 6.61483 15.8369 7.12931C15.8369 7.6438 16.254 8.06087 16.7685 8.06087Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_265_423">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Download From Computer</span>
        </button>
      </div>
      <div
        className={`bg-[#F8F8F8] border-dashed border-[0.5px] border-opacity-50 flex flex-col items-center justify-center space-y-5 cursor-pointer min-h-[150px] ${
          imagesPreview.length ? 'cursor-auto' : ''
        }`}
        onClick={imagesPreview.length > 0 ? () => {} : triggerFileModal}
      >
        {imagesPreview.length > 0 ? (
          <ImagesList images={imagesPreview} onDelete={(index) => onDelete(index)} />
        ) : (
          <EmptyState />
        )}
      </div>
      <input
        id="files"
        type="file"
        className="hidden"
        multiple
        ref={fileInputRef}
        onChange={(event) => {
          console.log(event.target.files);
          console.log(GenerateImagePreview(event.target.files[0]));
          setImagesPreview(
            Array.from(event.target.files).map((file) => {
              console.log(file);

              return GenerateImagePreview(file);
            }),
          );

          field.onChange(event.target.files);
        }}
      />
    </FormCard>
  );
};
