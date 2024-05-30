import { SettingsPersonalInformation } from '@/components/SettingsPage/SettingsPersonalInformation';
import { SettingsHeader } from '@/components/SettingsPage/SettingsHeader';
import { SettingsDescription } from '@/components/SettingsPage/SettingsDescription';
import { Input } from '@/components/Inputs/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { SettingsAvatarInput } from '@/components/SettingsPage/SettingsAvatarInput';
import axiosClient from '@/api/config/axios';
import { Header } from '@/components/Layout/Header';
import { Button } from '@/components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getDownloadURL, getStorage, ref, uploadString, uploadBytes } from '@firebase/storage';
import { generateUUID } from '@/utils/GenerateUUID';
import { firebaseApp } from '@/config/firebase';
import {useQuery} from "@tanstack/react-query";
import {getApartments} from "@/api/apartments";

import {useEffect} from "react";
import {ApartmentDealType} from "@/types/Apartament";
import {useRouter} from "next/router";
import classNames from "classnames";
import NextImage from "next/image";
import moment from "moment/moment";
import {Roboto} from "next/font/google";
import {FlatCard} from "@/components/FlatCard";

const getTypeLabel  = ( type : ApartmentDealType) => {
  switch (type){
    case "co-renting":
      return "Спільна оренда"
      break;
    case "day":
      return "Подобово"
      break;
    case "room":
      return "Кімната"
      break;
    case "month":
      return "Довгостроково"
      break;
  }
}

const RoomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M10.3125 13.5938V9.375H4.6875V13.5938C4.6875 13.875 4.5 14.0625 4.21875 14.0625H10.7812C10.5 14.0625 10.3125 13.875 10.3125 13.5938Z"
      fill="black"
    />
    <path
      d="M12.6562 6.14062V3.65625C12.6562 2.4375 11.625 1.40625 10.4062 1.40625H4.59375C3.375 1.40625 2.34375 2.4375 2.34375 3.65625V6.14062C1.54688 6.32812 0.9375 7.07812 0.9375 7.96875V12.6562C0.9375 13.4531 1.54688 14.0625 2.34375 14.0625H4.21875C3.9375 14.0625 3.75 13.875 3.75 13.5938V7.96875C3.75 7.45312 3.32812 7.03125 2.8125 7.03125C2.53125 7.03125 2.34375 6.84375 2.34375 6.5625C2.34375 6.28125 2.53125 6.09375 2.8125 6.09375C3.84375 6.09375 4.6875 6.9375 4.6875 7.96875V8.4375H10.3125V7.96875C10.3125 6.9375 11.1562 6.09375 12.1875 6.09375C12.4688 6.09375 12.6562 6.28125 12.6562 6.5625C12.6562 6.84375 12.4688 7.03125 12.1875 7.03125C11.6719 7.03125 11.25 7.45312 11.25 7.96875V13.5938C11.25 13.875 11.0625 14.0625 10.7812 14.0625H12.6562C13.4531 14.0625 14.0625 13.4531 14.0625 12.6562V7.96875C14.0625 7.07812 13.4531 6.375 12.6562 6.14062Z"
      fill="black"
    />
  </svg>
);

const StairsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <g clip-path="url(#clip0_1012_1861)">
      <path
        d="M14.2377 2.95724H11.4975C11.0765 2.95724 10.7353 3.29818 10.7353 3.71932V5.69763H8.75705C8.33591 5.69763 7.99472 6.03845 7.99472 6.45962V8.43806H6.01641C5.59527 8.43806 5.2542 8.77937 5.2542 9.20008V11.2738H3.18094C2.97864 11.2738 2.78478 11.354 2.6419 11.4968C2.4989 11.6396 2.4187 11.8343 2.4187 12.0358L2.41895 13.6303C2.41895 14.0518 2.76026 14.3927 3.18116 14.3927H14.2377C14.6589 14.3927 14.9999 14.0518 14.9999 13.6303V3.71929C15 3.29818 14.6589 2.95724 14.2377 2.95724Z"
        fill="black"
      />
      <path
        d="M10.2266 0.76076C10.0304 0.559664 9.70912 0.555799 9.50814 0.751453C6.24859 3.92669 3.14766 7.028 0.148905 10.0265C0.0534895 10.1219 0 10.2515 0 10.386V13.8635C0 14.1437 0.227408 14.3717 0.508119 14.3717C0.788553 14.3717 1.01636 14.1438 1.01636 13.8635V10.5963C3.96645 7.64609 7.01643 4.59769 10.2171 1.47925C10.418 1.28363 10.4221 0.961732 10.2266 0.76076Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1012_1861">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <g clip-path="url(#clip0_1012_1868)">
      <path
        d="M11.9925 2.12696H3.007C2.57464 2.12696 2.22291 2.47847 2.22291 2.91058V12.0895C2.22291 12.5218 2.57443 12.8735 3.007 12.8735H11.9925C12.4248 12.8735 12.7765 12.522 12.7765 12.0895V2.91058C12.7763 2.47847 12.4248 2.12696 11.9925 2.12696ZM9.28352 9.36396H7.77197V5.94526L6.45725 8.0312L5.14774 5.94526V9.36418H3.64062V3.29503H5.14774L6.45725 5.38098L7.77197 3.29503H9.28352V9.36396ZM13.4628 0H1.53664C0.758765 0 0.12793 0.630799 0.12793 1.40856V13.5911C0.12793 14.3692 0.758765 15 1.53664 15H13.463C14.2409 15 14.8717 14.3692 14.8717 13.5911V1.40856C14.8717 0.630799 14.2409 0 13.4628 0ZM13.3318 12.0895C13.3318 12.8278 12.7311 13.4288 11.9925 13.4288H3.007C2.2686 13.4288 1.6676 12.828 1.6676 12.0895V2.91058C1.6676 2.17243 2.26839 1.57139 3.007 1.57139H11.9925C12.7308 1.57139 13.3318 2.17218 13.3318 2.91058V12.0895Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1012_1868">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });

export const SettingsCard = ({
                           photo,
                           price,
                           city,
                           street,
                           roomsCount,
                           square,
                           floorNumber,
                           title,
                           type,
                           id,
                           date,
                           titleClassname = '',
                           wrapperClassName = '',
                         }) => {
  const router = useRouter();

  return (
    <div
      className={classNames([
        'bg-white relative border border-black border-opacity-10 shrink-0 p-[10px] cursor-pointer max-w-[305px] shadow-sm',
        roboto.className,
        wrapperClassName,
      ])}
      onClick={() => {
        router.push(`/apartment/${id}`);
      }}
    >
      <div className="absolute top-6 right-6 bg-white rounded-md z-[7] p-1 text-xs">
        {getTypeLabel(type)}
      </div>
      <div className="w-full aspect-[265/165] relative">
        {photo && <NextImage src={photo} objectFit="cover" layout="fill" alt="" />}
      </div>
      <div className="mt-3">
        <span className={classNames(['text-black font-medium text-xl', roboto.className])}>
          {price} ₴
        </span>
      </div>
      <div className={classNames(['mt-3 text-sm text-black line-clamp-2'], titleClassname)}>{title}</div>
      <div className="mt-3 text-xs text-black text-opacity-50">
        {city}, {street}
      </div>
      <div className="mt-3 text-xs text-black text-opacity-50">
        <span>{moment(date).fromNow()}</span>
      </div>
      <div className="mt-3 space-x-2 flex flex-row">
        <div className="space-x-2 flex flex-row items-end">
          <RoomIcon />
          <span className="text-xs text-black -mt-2">{roomsCount}</span>
        </div>
        <div className="space-x-2 flex flex-row items-end">
          <StairsIcon />
          <span className="text-xs text-black -mt-2">{floorNumber}</span>
        </div>
        <div className="space-x-2 flex flex-row items-end">
          <SquareIcon />
          <span className="text-xs text-black -mt-2">{square} м²</span>
        </div>
      </div>
      <div className="mt-4 flex flex-row space-x-4">
        <Button className="flex-1 bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
               stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/>
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/>
            <path d="M16 5l3 3"/>
          </svg>
        </Button>
        <Button className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24"
               viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
               stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7l16 0"/>
            <path d="M10 11l0 6"/>
            <path d="M14 11l0 6"/>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default function Example() {
  const { firstName, lastName, email, avatar, phone } = useContext(UserContext);

  const methods = useForm({
    defaultValues: {
      firstName,
      lastName,
      avatar,
      email,
      phone,
    },
  });

  const { data: apartments, isLoading } = useQuery({
    queryKey: [
      'apartments_settings',
    ],
    queryFn: () =>
      getApartments({
        search : "",
        minPrice : 0,
        maxPrice : 40000,
        roomsCount : [1,2,3,4,5,6,7,8],
        maxSquare : 300,
        minSquare :0,
        minFloor : 0,
        maxFloor : 100,
        type : ['day', 'month', 'room', 'co-renting'],
        sortType : "DATE",
        state : "",
        city : "",
      }),
  });
  
  useEffect(() => {
    console.log(apartments)
  }, [apartments])

  const onSubmit = async (data) => {
    if (data.avatar) {
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `/avatars/${generateUUID()}`);

      const base64Image = data.avatar;

      const byteArray = Uint8Array.from(atob(base64Image.split(';base64,')[1]), (c) =>
        c.charCodeAt(0),
      );
      const imageBlob = new Blob([byteArray]);

      console.log(imageBlob);

      await uploadBytes(storageRef, imageBlob);

      const firebaseAvatar = await getDownloadURL(storageRef);

      console.log(firebaseAvatar);

      await axiosClient.put('/auth/profile', {
        ...data,
        avatar: firebaseAvatar,
      });
    } else {
      await axiosClient.put('/auth/profile', data);
    }
    toast.success('Successfully updated!', {
      position: 'top-right',
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="flex h-full flex-col">
        <Header />
        <ToastContainer hideProgressBar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <main className="flex flex-1 flex-col overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex flex-1 xl:overflow-hidden">
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Особистий кабінет</h1>

                    <form
                      className="divide-y-slate-200 mt-6 space-y-8 divide-y"
                      onSubmit={(event) => {
                        event.preventDefault();

                        methods.handleSubmit(onSubmit)();
                      }}
                    >
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <SettingsHeader />

                        <Input
                          type="text"
                          name="firstName"
                          label="Ім'я"
                          wrapperClassName="sm:col-span-3"
                        />

                        <Input
                          type="text"
                          name="lastName"
                          label="Прізвище"
                          wrapperClassName="sm:col-span-3"
                        />
                        <SettingsAvatarInput />
                        <SettingsDescription />
                      </div>

                      <SettingsPersonalInformation />

                      <div className="flex justify-end gap-x-3 pt-8">
                        {/*<Button*/}
                        {/*  type="button"*/}
                        {/*  className="rounded-md mx-0 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"*/}
                        {/*  variant="secondary"*/}
                        {/*>*/}
                        {/*  Cancel*/}
                        {/*</Button>*/}
                        <Button
                          type="submit"
                          className="inline-flex mx-0 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          variant="primary"
                        >
                          Зберегти
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[704px] py-10 lg:py-12">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 mt-10">Активні оголошення</h1>
              {apartments && apartments.apartments.length && <div className="flex flex-row space-x-8 mt-4">
                <SettingsCard
                  photo={apartments.apartments[1].photos.length ? apartments.apartments[1].photos[0] : ''}
                  price={apartments.apartments[1].price}
                  city={apartments.apartments[1].city}
                  street={apartments.apartments[1].street}
                  floorNumber={apartments.apartments[1].floorNumber}
                  roomsCount={apartments.apartments[1].rooms}
                  square={apartments.apartments[1].square}
                  title={apartments.apartments[1].title}
                  key={apartments.apartments[1].id}
                  type={apartments.apartments[1].type}
                  id={apartments.apartments[1].id}
                  date={apartments.apartments[1].createdAt}
                  titleClassname="min-h-[40px]"
                />
                <SettingsCard
                  photo={apartments.apartments[3].photos.length ? apartments.apartments[3].photos[0] : ''}
                  price={apartments.apartments[3].price}
                  city={apartments.apartments[3].city}
                  street={apartments.apartments[3].street}
                  floorNumber={apartments.apartments[3].floorNumber}
                  roomsCount={apartments.apartments[3].rooms}
                  square={apartments.apartments[3].square}
                  title={apartments.apartments[3].title}
                  key={apartments.apartments[3].id}
                  type={apartments.apartments[3].type}
                  id={apartments.apartments[3].id}
                  date={apartments.apartments[3].createdAt}
                  titleClassname="min-h-[40px]"
                />
              </div>}
            </div>
          </main>
        </div>
      </div>
    </FormProvider>
  );
}
