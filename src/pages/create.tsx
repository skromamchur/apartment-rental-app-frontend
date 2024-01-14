import { Inter } from 'next/font/google';
import { Header } from '@/components/Layout/Header';
import classNames from 'classnames';
import Index from '@/components/FilterLayout';
import { FlatCard } from '@/components/FlatCard';
import { FormProgress } from '@/components/FormProgress';
import { GeneralInformation } from '@/components/CreateAppartmentSteps/GeneralInformation';
import { LocationInformation } from '@/components/CreateAppartmentSteps/LocationInformation';
import { PhotosInformation } from '@/components/CreateAppartmentSteps/PhotosInformation';
import { FeaturesInformation } from '@/components/CreateAppartmentSteps/FeaturesInformation';

import { useForm, FormProvider } from 'react-hook-form';

import axios from 'axios';
import axiosClient from '@/api/config/axios';
import { API_ROUTES } from '@/constants/routes/ApiRoutes';
import FormData from 'form-data';
import { createApartment } from '@/api/apartments';

const inter = Inter({ subsets: ['latin'] });

const Create = () => {
  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    await createApartment(data);
  };

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden pb-20 ${inter.className}`}
    >
      <Header />
      <div className="mx-auto max-w-[1280px] w-full mt-8">
        <FormProgress />
        <div className="mt-20 space-y-10">
          <FormProvider {...methods}>
            <GeneralInformation />
            <LocationInformation />
            <PhotosInformation />
            <FeaturesInformation />
            <button type="button" onClick={methods.handleSubmit(onSubmit)}>
              submit
            </button>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Create;
