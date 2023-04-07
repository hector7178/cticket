import React from 'react';
import { classNames } from '@/helpers';
import HeaderStepCheckout, {
  props as HeaderStepCheckoutProps,
} from '@/components/main/checkout/HeaderStepCheckout';
import { Radio, Title } from '@/components/commons';
import { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
} & HeaderStepCheckoutProps &
  UseFormReturn<any>;
// TODO: descriptions
const StepCheckoutTickets: React.FC<props> = ({
  className,
  location,
  name,
  ...useFormReturn
}) => {
  const { register } = useFormReturn;
  const t = useTranslations('Step_Checkout_Tickets');
  return (
    <div className={classNames('rounded-xl shadow-xl', className)}>
      <HeaderStepCheckout name={name} location={location} />
      <div className="px-24 py-20 space-y-10 [&_label]:text-xl [&_label]:font-semibold">
        <Title level="h3">{t('title')}</Title>

        <div className="space-y-3">
          <Radio
            label={t('digital_title')}
            value="digital"
            {...register('tickets_option')}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            assumenda voluptatibus, autem maxime fuga ipsam obcaecati animi
            consequatur laboriosam soluta amet eaque voluptas perspiciatis
            tempora iusto est doloremque, commodi beatae suscipit aperiam quod
            facere vel! Ea, ut. Eos nesciunt itaque odio eius ipsa libero
            suscipit, cumque quae est atque molestiae!
          </p>
        </div>
        <div className="space-y-3">
          <Radio
            label={t('pick_title')}
            value="pick_up"
            {...register('tickets_option')}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            voluptatum atque dolorem sit obcaecati quo impedit nulla et dolorum
            fugit magni necessitatibus consequuntur numquam non, fugiat odit
            delectus harum tempore vero? Totam sint voluptatem amet eos ratione
            nihil, aspernatur beatae. Voluptas rerum facilis excepturi impedit
            unde natus laboriosam rem expedita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCheckoutTickets;
