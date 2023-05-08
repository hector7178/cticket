import React from 'react';
import { classNames } from '@/helpers';
import { UseFormReturn } from 'react-hook-form';
import { Disclosure } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { Title, TextField, Icon, Select, Checkbox } from '@/components/commons';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export type props = {
  className?: string;
} & UseFormReturn<any>;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const StepCheckoutPayment: React.FC<props> = ({
  className,
  ...useFormReturn
}) => {
  const {
    register,
    formState: { errors },
  } = useFormReturn;
  const t = useTranslations('Step_Checkout_Payment');
  return (
    <Elements stripe={stripePromise}>
      <div className={classNames('space-y-5', className)}>
        <Disclosure as="div" className="shadow-lg rounded-xl">
          <Disclosure.Button
            className={classNames(
              'flex w-full justify-between items-center p-8 gap-10'
            )}
          >
            <Title level="h4">{t('credit_or_debit')}</Title>

            <span className="flex">
              <Icon name="visa" className="w-24" />
              <Icon name="master-card" className="w-24" />
              <Icon name="amex" className="w-24" />
            </span>
          </Disclosure.Button>

          <Disclosure.Panel className="pb-8 m-8">
            <div className="grid grid-cols-1 gap-5 mr-32 md:grid-cols-2">
              <Select
                error={errors?.new_card?.message}
                options={[
                  {
                    name: t('fieldset_card.new_card'),
                    value: '',
                  },
                  {
                    name: 'Option 1',
                    value: 'option_1',
                  },
                ]}
                {...register('new_card', {
                  required: 'Required',
                })}
              />
              <div></div>
              <div className="flex flex-col">
                <label
                  className="mt-auto input-label"
                  htmlFor="card-number-element"
                >
                  {t('fieldset_card.card_number')}
                </label>
                <CardNumberElement
                  id="card-number-element"
                  className="textfield-primary h-[40px] mt-1"
                />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col flex-1">
                  <label
                    className="mt-auto input-label"
                    htmlFor="card-expire-element"
                  >
                    {t('fieldset_card.expiration_date')}
                  </label>
                  <CardExpiryElement
                    id="card-expire-element"
                    className="textfield-primary mt-1 h-[40px]"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    className="mt-auto input-label"
                    htmlFor="card-cvv-element"
                  >
                    {t('fieldset_card.cvv')}
                  </label>
                  <CardCvcElement
                    id="card-cvv-element"
                    className="textfield-primary mt-1 h-[40px]"
                  />
                </div>
              </div>
              <TextField
                error={errors?.holders_name?.message}
                label={t('fieldset_card.holders_name')}
                {...register('holders_name', {
                  required: 'Required',
                })}
              />
              <TextField
                label={t('fieldset_card.alias')}
                {...register('alias')}
              />

              <Select
                error={errors?.month_fee?.message}
                options={[
                  {
                    name: t('fieldset_card.month_fee.option'),
                    value: '3_months',
                  },
                ]}
                label={t('fieldset_card.month_fee.label')}
                {...register('month_fee', {
                  required: 'Required',
                })}
              />
              <div></div>

              <Checkbox
                {...register('save_my_card')}
                label={t('fieldset_card.save_my_card')}
              />
            </div>

            <Title className="mt-8" level="h4">
              {t('address_card_data')}
            </Title>
            <div className="grid grid-cols-1 gap-5 mr-32 mt-7 md:grid-cols-2">
              <Select
                error={errors?.address?.message}
                options={[
                  {
                    name: t('fieldset_address.select_your_address.option'),
                    value: '',
                  },
                ]}
                label={t('fieldset_address.select_your_address.label')}
                {...register('address', {
                  required: 'Required',
                })}
              />
              <div></div>
              <Select
                error={errors?.country?.message}
                options={[
                  {
                    name: 'Mexico',
                    value: 'mexico',
                  },
                ]}
                label={t('fieldset_address.country')}
                {...register('country', {
                  required: 'Required',
                })}
              />
              <div></div>

              <div className="flex items-end col-span-2 gap-5">
                <Select
                  error={errors?.state?.message}
                  options={[
                    {
                      name: t('fieldset_address.state.option'),
                      value: '',
                    },
                  ]}
                  label={t('fieldset_address.state.label')}
                  {...register('state', {
                    required: 'Required',
                  })}
                />

                <Select
                  error={errors?.city?.message}
                  options={[
                    {
                      name: t('fieldset_address.city.option'),
                      value: '',
                    },
                  ]}
                  label={t('fieldset_address.city.label')}
                  {...register('city', {
                    required: 'Required',
                  })}
                />

                <TextField
                  error={errors?.postal_code?.message}
                  label={t('fieldset_address.postal_code.label')}
                  placeholder={t('fieldset_address.postal_code.placeholder')}
                  {...register('postal_code', {
                    required: 'Required',
                  })}
                />
              </div>

              <TextField
                error={errors?.address_1?.message}
                label={t('fieldset_address.address_1')}
                {...register('address_1', {
                  required: 'Required',
                })}
              />

              <TextField
                error={errors?.address_2?.message}
                label={t('fieldset_address.address_2')}
                {...register('address_2', {
                  required: 'Required',
                })}
              />

              <div className="flex items-end gap-5">
                <Select
                  error={errors?.phone_code?.message}
                  label={t('fieldset_address.phone')}
                  options={[
                    {
                      name: '+52',
                      value: '+52',
                    },
                  ]}
                  {...register('phone_code', {
                    required: 'Required',
                  })}
                />
                <TextField
                  error={errors?.phone_number?.message}
                  {...register('phone_number', {
                    required: 'Required',
                  })}
                />
              </div>
              <TextField
                error={errors?.email?.message}
                label={t('fieldset_address.email.label')}
                placeholder={t('fieldset_address.email.placeholder')}
                {...register('email', {
                  required: 'Required',
                })}
              />

              <Checkbox
                label={t('save_address')}
                {...register('save_address')}
              />
            </div>
          </Disclosure.Panel>
        </Disclosure>
        {/* 
        <Disclosure as="div" className="shadow-lg rounded-xl">
          <Disclosure.Button
            className={classNames(
              'flex w-full justify-between items-center p-8 gap-10'
            )}
          >
            <Title level="h4">Paypal</Title>

            <Icon name="paypal" className="w-24" />
          </Disclosure.Button>

          <Disclosure.Panel></Disclosure.Panel>
        </Disclosure> */}
      </div>
    </Elements>
  );
};

export default StepCheckoutPayment;
