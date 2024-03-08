import { Roboto } from 'next/font/google';
import { Header } from '@/components/Layout/Header';
import { GeneralInformation } from '@/components/CreateAppartmentSteps/GeneralInformation';
import { LocationInformation } from '@/components/CreateAppartmentSteps/LocationInformation';
import { PhotosInformation } from '@/components/CreateAppartmentSteps/PhotosInformation';
import { FeaturesInformation } from '@/components/CreateAppartmentSteps/FeaturesInformation';

import { useForm, FormProvider } from 'react-hook-form';

import { createApartment } from '@/api/apartments';

import { Button } from '@/components/Button';

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

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
      <div className="mx-auto max-w-[900px] w-full mt-8">
        <div className="space-y-10">
          <FormProvider {...methods}>
            <GeneralInformation />
            <LocationInformation />
            <PhotosInformation />
            <FeaturesInformation />
            <Button
              type="button"
              onClick={methods.handleSubmit(onSubmit, (errors) => {
                console.log(errors);
              })}
            >
              Create
            </Button>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Create;
