import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/commons';
import { CurrentColor } from '@/helpers';
export type props = {
  className?: string;
  currentStep: number;
};

const HeaderCheckout: React.FC<props> = ({ className, currentStep }) => {
  const t = useTranslations('Header_Checkout');
  const currentColor = CurrentColor();
  const steps = [
    t('first_step'),
    t('second_step'),
    t('third_step'),
    t('fourth_step'),
  ];
  return (
    <div className="mx-4 p-4">
      <div className="flex items-center">
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          return (
            <>
              <div className="flex items-center relative font-bold">
                <div
                  className={classNames(
                    'rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  flex items-center justify-center',
                    currentStep > stepNumber
                      ?`bg-${currentColor}`
                      : 'bg-white border-gray-200',
                    currentStep == stepNumber && `border-${currentColor}`
                  )}
                >
                  {currentStep > stepNumber ? (
                    <Icon name="check-solid" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 ">
                  {step}
                </div>
              </div>
              {steps.length !== stepNumber && (
                <div
                  className={classNames(
                    'flex-auto border-t-2 transition duration-500 ease-in-out ',
                    currentStep > stepNumber
                      ? `border-${currentColor}`
                      : 'border-gray-200'
                  )}
                ></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderCheckout;
