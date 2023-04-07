import React, { useEffect, useState } from 'react';
import { classNames } from '@/helpers';
import HeaderStepCheckout, {
  props as HeaderStepCheckoutProps,
} from '@/components/main/checkout/HeaderStepCheckout';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { Button, Icon, Select, TextField } from '@/components/commons';
import { useTranslations } from 'next-intl';
import formatNumber from 'format-number';

export type props = {
  className?: string;
  price: number;
} & HeaderStepCheckoutProps &
  UseFormReturn<any>;

const StepCheckoutQuantity: React.FC<props> = ({
  className,
  name,
  location,
  price,
  ...useFormReturn
}) => {
  const { register, setValue, watch } = useFormReturn;
  const t = useTranslations('Step_Checkout_Quantity');
  const [tickets] = watch(['tickets']);
  return (
    <div className={classNames('rounded-xl shadow-xl', className)}>
      <HeaderStepCheckout name={name} location={location} />
      <div className="px-24 py-20 space-y-10">
        {/* <div className="inline-block space-y-3">
          <span className="font-semibold">{t('select_date_time')}</span>
          <TextField
            className="w-72"
            type="datetime-local"
            {...register('datetime')}
          />
        </div> */}

        <div className="space-y-3">
          <span className="font-semibold">{t('select_number_of_tickets')}</span>
          <div className="flex items-center gap-5">
            <Button
              onClick={() =>
                setValue('tickets', tickets == 1 ? tickets : tickets - 1)
              }
              size="small"
              shape="pill"
              color="neutral"
              iconLeft={<Icon name="minus" className="w-4 h-4" />}
            />
            <span className="font-semibold">{watch('tickets')}</span>
            <Button
              size="small"
              shape="pill"
              onClick={() => setValue('tickets', tickets + 1)}
              iconLeft={<Icon name="plus" className="w-4 h-4" />}
            />

            <span>
              {t('price', {
                value: formatNumber({ prefix: '$', suffix: ' MXN' })(price),
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCheckoutQuantity;
