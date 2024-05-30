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

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { APP_ROUTES } from '@/constants/routes/AppRoutes';

import { CheckIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

const Create = () => {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    const result = await createApartment(data);
    toast.success('Advertisement successfully created!', {
      position: 'top-right',
    });
    //router.push(APP_ROUTES.APARTMENT(result.id));
  };

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const steps = [
    { name: 'Загальна інформація', description: 'Заповніть основні дані про квартиру: тип оголошення, назва, опис, ціна, площа...', href: '#', status: step > 0 ? 'complete' : 'current' },
    { name: 'Розташування', description: 'Вкажіть точну адресу квартири, щоб потенційні орендарі могли легко знайти ваше оголошення на карті', href: '#', status: step > 1 ? 'complete' : step === 1 ? 'current' : 'upcoming' },
    { name: 'Фотографії', description: 'Завантажте фотографії квартири, щоб продемонструвати її стан та основні зручності.', href: '#', status: step > 2 ? 'complete' : step === 2 ? 'current' : 'upcoming' },
    { name: 'Основні зручності', description: 'Перелічіть основні зручності та техніку, що є в квартирі', href: '#', status: step === 3 ? 'current' : 'upcoming' },
  ];

  return (
    <div className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden pb-20 ${inter.className}`}>
      <ToastContainer hideProgressBar />
      <Header />
      <div className="mx-auto max-w-[1200px] w-full mt-8 flex flex-row space-x-12">
        <nav aria-label="Progress" className="mt-4">
          <ol role="list" className="overflow-hidden">
            {steps.map((stepItem, stepIdx) => (
              <li key={stepItem.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                {stepItem.status === 'complete' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                    ) : null}
                    <a href={stepItem.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                          <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{stepItem.name}</span>
                        <span className="text-sm text-gray-500 max-w-[300px]">{stepItem.description}</span>
                      </span>
                    </a>
                  </>
                ) : stepItem.status === 'current' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <a href={stepItem.href} className="group relative flex items-start" aria-current="step">
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                          <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-indigo-600">{stepItem.name}</span>
                        <span className="text-sm text-gray-500 max-w-[300px]">{stepItem.description}</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <a href={stepItem.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500">{stepItem.name}</span>
                        <span className="text-sm text-gray-500 max-w-[300px]">{stepItem.description}</span>
                      </span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-4 flex-1">
          <FormProvider {...methods}>
            {step === 0 && <GeneralInformation />}
            {step === 1 && <LocationInformation />}
            {step === 2 && <PhotosInformation />}
            {step === 3 && <FeaturesInformation />}
            <div className="flex space-x-4">
              {step > 0 && (
                <Button type="button" onClick={handlePrevStep}>
                  Назад
                </Button>
              )}
              {step < steps.length - 1 ? (
                <Button type="button" onClick={handleNextStep}>
                  Далі
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={methods.handleSubmit(onSubmit, (errors) => {
                    console.log(errors);
                  })}
                  className="ml-auto"
                >
                  Опублікувати
                </Button>
              )}
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Create;
