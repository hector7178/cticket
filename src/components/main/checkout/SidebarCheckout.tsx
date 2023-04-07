import React from 'react';
import { classNames } from '@/helpers';
import { Button, TextField, Icon } from '@/components/commons';
import { format } from 'date-fns';
import { useLocale, useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';
import Image from 'next/image';
import formatNumber from 'format-number';

export type props = {
  className?: string;
  image: string;
  name: string;
  date: Date;
  countTickets: number;
  spots?: { row: string; seat: number; section: number }[];
  subtotal: number;
  fees: number;
  discount: number;
  total: number;
  currentStep:number
} & UseFormReturn<any>;

const SidebarCheckout: React.FC<props> = ({
  className,
  image,
  name,
  date,
  countTickets,
  spots,
  subtotal,
  fees,
  discount,
  total,
  currentStep,
  ...useFormReturn
}) => {
  const t = useTranslations('Sidebar_Checkout');
  const locale = useLocale();
  const {
    register,
    formState: { errors },
  } = useFormReturn;
  const PaymentMethods = ({ className }) => (
    <div className={className}>
      <p>{t('payment_methods')}:</p>
      <div className="flex flex-wrap gap-3 mt-3">
        <Icon className="w-8 " name="visa"></Icon>
        <Icon className="w-8 " name="master-card"></Icon>
        <Icon className="w-8 " name="amex"></Icon>
        <Icon className="w-8 " name="paypal"></Icon>
        <Icon className="w-8 " name="mercado-pago"></Icon>
      </div>
    </div>
  );
  const TableSpots = ({ className }) => (
    <table className={classNames('text-sm table-', className)}>
      <thead>
        <th className="pr-5">{t('row')}</th>
        <th className="pr-5">{t('seat')}</th>
        <th>{t('section')}</th>
        <th></th>
      </thead>
      <tbody>
        {spots.map(({ row, seat, section }, idx) => (
          <tr key={idx}>
            <td className="pr-5 text-center">{row}</td>
            <td className="pr-5 text-center">{seat}</td>
            <td className="pr-5 text-center">{section}</td>
            <td className="flex items-center justify-end">
              <Icon
                className="w-4 h-4 text-gray-500 cursor-pointer"
                name="trash-outline"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div
      className={classNames(
        'flex flex-col space-y-5 card text-sm md:text-base',
        className
      )}
    >
      <div className="relative hidden aspect-video md:block">
        <Image className="object-cover" src={image} alt={name} fill></Image>
      </div>
      <div className="pb-5 text-lg font-bold text-center border-b md:text-xl">
        {t('resume')}
      </div>
      <div className="grid grid-cols-2 px-8 pb-8 gap-x-10 gap-y-10 md:grid-cols-1">
        <div>
          <p className="text-base font-bold md:text-lg">{name}</p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="clock-outline" />
              <p className="font-bold">
                {t('time')}:{' '}
                <span className="font-medium">{format(date, 'hh:mm')} hrs</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="calendar-outline" />
              <p className="font-bold">
                {t('date')}:{' '}
                <span className="font-medium">{format(date, 'MMM yyyy')}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="person-outline" />
              <p className="font-bold">
                {t('tickets')}:{' '}
                <span className="font-medium">{countTickets}</span>
              </p>
            </div>
          </div>
        </div>
        {currentStep > 1 && (
          <div className="hidden md:block">
            <TextField
              label={t('add_coupon')}
              error={errors.coupon?.message}
              {...register('coupon')}
            ></TextField>
            <div className="flex justify-end mt-3">
              <Button>{t('apply_coupon')}</Button>
            </div>
          </div>
        )}
        {spots && <TableSpots className="hidden md:block" />}
        <div>
          <div className="grid w-full grid-cols-2">
            <p>{t('subtotal')}</p>
            <p className="text-right">
              {formatNumber({ prefix: '$' })(subtotal)}
            </p>
            <p>{t('fees')}</p>
            <p className="text-right">{formatNumber({ prefix: '$' })(fees)}</p>
            <p>{t('discount')}</p>
            <p className="text-right">
              {formatNumber({ prefix: '-$' })(discount)}
            </p>
            <p className="text-lg font-bold uppercase md:text-xl">
              {t('total')}
            </p>
            <p className="text-lg font-bold text-right md:text-xl">
              {formatNumber({ prefix: '$' })(total)}
            </p>
          </div>
          <PaymentMethods className="mt-5 md:hidden" />
        </div>
        {spots && <TableSpots className="md:hidden" />}

        <PaymentMethods className="hidden md:block" />
      </div>
    </div>
  );
};

export default SidebarCheckout;
