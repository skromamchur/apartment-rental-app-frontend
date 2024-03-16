//@ts-nocheck

import classNames from 'classnames';
import { Button } from '@/components/Button';
import { ReactNode } from 'react';

export const StepCard = ({
  onNext,
  onBack,
  nextButtonLabel = 'Next',
  children,
  className,
}: {
  onNext: any;
  onBack: any;
  nextButtonLabel?: string;
  children: ReactNode;
  className: string;
}) => (
  <div
    className={classNames(
      'rounded-[20px] shadow-[0px_1px_2px_0px_#00000040] flex flex-col max-w-[560px] mx-auto bg-white',
      className,
    )}
  >
    {children}
    <div className="border-t pt-[22px] pb-[25px] flex flex-row justify-end px-4 space-x-5">
      <Button
        type="button"
        label="Back"
        className="rounded-full text-[18px] leading-[26px]"
        variant="text"
        onClick={onBack}
      >
        Back
      </Button>
      <Button
        type="button"
        className="!px-8 rounded-lg text-[18px] leading-[26px]"
        onClick={onNext}
      >
        {nextButtonLabel}
      </Button>
    </div>
  </div>
);
