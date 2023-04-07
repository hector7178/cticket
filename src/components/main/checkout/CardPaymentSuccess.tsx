import React from 'react';
import { classNames } from '@/helpers';
import { Title, Icon, ButtonLink } from '@/components/commons';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  id: string;
  description: string;
};

const CardPaymentSucess: React.FC<props> = ({ className, description, id }) => {
  const t = useTranslations('Card_Payment_Success');
  return (
    <div
      className={classNames(
        'flex flex-col space-y-5 items-center text-center p-5',
        className
      )}
    >
      <Icon className="w-24 h-24" name="check-circle-yellow" />
      <Title level="h3">{t('title')}</Title>
      <p className="font-bold text-lg">{t('purchase')} ID {id}</p>
      <p>{description}</p>
      <ButtonLink href="/">{t('button')}</ButtonLink>
    </div>
  );
};

export default CardPaymentSucess;
