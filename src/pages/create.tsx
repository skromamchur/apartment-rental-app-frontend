import { Roboto } from 'next/font/google';
import { Header } from '@/components/Layout/Header';
import { GeneralInformation } from '@/components/CreateAppartmentSteps/GeneralInformation';
import { LocationInformation } from '@/components/CreateAppartmentSteps/LocationInformation';
import { PhotosInformation } from '@/components/CreateAppartmentSteps/PhotosInformation';
import { FeaturesInformation } from '@/components/CreateAppartmentSteps/FeaturesInformation';

import { useForm, FormProvider } from 'react-hook-form';

import { createApartment } from '@/api/apartments';

import { Button } from '@/components/Button';
import { useState } from 'react';

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

const Create = () => {
  const methods = useForm();

  const [step, setStep] = useState<number>(0);

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
            {/*{step === 0 && (*/}
            {/*  <StepCard className="max-w-[560px]" onNext={() => setStep(1)}>*/}
            {/*    <TypeInformation />*/}
            {/*  </StepCard>*/}
            {/*)}*/}
            {/*{step === 1 && (*/}
            {/*  <StepCard*/}
            {/*    className="max-w-[560px]"*/}
            {/*    onBack={() => setStep(0)}*/}
            {/*    onNext={() => setStep(2)}*/}
            {/*  >*/}
            {/*    <GeneralInformation />*/}
            {/*  </StepCard>*/}
            {/*)}*/}
            {/*{step === 2 && (*/}
            {/*  <StepCard*/}
            {/*    className="max-w-[960px]"*/}
            {/*    onBack={() => setStep(1)}*/}
            {/*    onNext={() => setStep(3)}*/}
            {/*  >*/}
            {/*    <LocationInformation />*/}
            {/*  </StepCard>*/}
            {/*)}*/}
            {/*{step === 3 && (*/}
            {/*  <StepCard*/}
            {/*    className="max-w-[960px]"*/}
            {/*    onBack={() => setStep(2)}*/}
            {/*    onNext={() => setStep(4)}*/}
            {/*  >*/}
            {/*    <PhotosInformation />*/}
            {/*  </StepCard>*/}
            {/*)}*/}
            {/*{step === 4 && (*/}
            {/*  <StepCard*/}
            {/*    className="max-w-[560px]"*/}
            {/*    onBack={() => setStep(3)}*/}
            {/*    onNext={methods.handleSubmit(onSubmit)}*/}
            {/*  >*/}
            {/*    <FeaturesInformation />*/}
            {/*  </StepCard>*/}
            {/*)}*/}
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
