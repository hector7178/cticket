import React from 'react';
import { classNames } from '@/helpers';
import { Title, Icon, ButtonLink } from '@/components/commons';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  error: string;
};

const CardPaymentError: React.FC<props> = ({ className, error }) => {
  const t = useTranslations('Card_Payment_Error');
  return (
    <div
      className={classNames(
        'flex flex-col space-y-5 items-center text-center p-5',
        className
      )}
    >
      <Icon className="w-24 h-24" name="check-circle-red" />
      <Title className="max-w-xl mx-auto" level="h3">{t('title')}</Title>
      <p>{error}</p>
      <ButtonLink href="/">{t('button')}</ButtonLink>
    </div>
  );
};

export default CardPaymentError;
