import React from 'react';
import { classNames } from '@/helpers';
import { Button, Icon } from '@/components/commons';

export type props = {
  className?: string;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FooterCheckout: React.FC<props> = ({
  className,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className={classNames('flex items-center justify-between', className)}>
      <div>
        <Button
          className={classNames(currentStep == 1 && 'hidden')}
          weight="inline"
          iconLeft={<Icon name="arrow-left" />}
          size="large"
          onClick={() => setCurrentStep((prv) => prv - 1)}
        >
          <p className="font-bold">Go back</p>
        </Button>
      </div>
      <div>
        <Button
          type="submit"
          className={classNames(currentStep == 4 && 'hidden')}
          size="large"
        >
          <p className="font-bold w-32">Next</p>
        </Button>
      </div>
    </div>
  );
};

export default FooterCheckout;
