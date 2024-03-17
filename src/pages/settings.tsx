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

  const onSubmit = async (data) => {
    if (data.avatar) {
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, `/avatars/${generateUUID()}`);

      const base64Image = data.avatar;

      const byteArray = Uint8Array.from(atob(base64Image.split(',')[1]), (c) => c.charCodeAt(0));
      const imageBlob = new Blob([byteArray]);

      await uploadBytes(storageRef, imageBlob);

      const firebaseAvatar = await getDownloadURL(storageRef);

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
          <main className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex flex-1 xl:overflow-hidden">
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account</h1>

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
                          label="First name"
                          wrapperClassName="sm:col-span-3"
                        />

                        <Input
                          type="text"
                          name="lastName"
                          label="Last name"
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
                          Save
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </FormProvider>
  );
}
