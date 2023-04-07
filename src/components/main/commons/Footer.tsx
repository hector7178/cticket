import React, { useState } from 'react';
import { classNames } from '@/helpers';
import { Icon, TextField } from '@/components/commons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import GoogleApple from 'public/images/assets/main/google-apple.png';
import Logo from 'public/images/assets/logos/logo_bg_black.png';
export type props = {
  className?: string;
};

type FormData = {
  email: string;
};
const Base: React.FC<props> = ({ className }) => {
  const t = useTranslations('Footer');
  const tf = useTranslations('errors');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const navigation = [
    {
      name: t('help'),
      items: [
        {
          name: t('faq'),
          href: '/landing/',
        },
        {
          name: t('contact'),
          href: '/landing/contact',
        },
      ],
    },
    {
      name: t('information'),
      items: [
        {
          name: t('advertisments'),
          href: '/landing/advert',
        },
        { name: t('about_us'), href: '/landing/about' },
        { name: t('donations'), href: '/landing/donation' },
        { name: t('partners'), href: '/landing/partner' },
        { name: t('privacy_policy'), href: '/landing/privacy' },
        { name: t('terms_and_conditions'), href: '/landing/terms' },
        { name: t('ticket_info'), href: '/landing/ticket' },
      ],
    },
    {
      name: t('pages'),
      items: [
        { name: t('blog'), href: '/landing/blog' },
        { name: t('newsletter'), href: '/landing/newsletter' },
        { name: t('programs'), href: '/program' },
        { name: t('search'), href: '/search' },
      ],
    },
  ];
  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <form
      className={classNames('bg-black p-8 text-white font-bold', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex  flex-col sm:flex-row gap-12 mt-8 max-w-7xl mx-auto">
        <div className=" flex justify-center sm:static ">
          <div>
            <Link href="/">
              <Image src={Logo} alt="application" width={200} height={200} />
            </Link>
          </div>
        </div>

        <div>
          <div>
            <p className=" text-xl">{t('follow_us')}</p>
            <div className="mt-3 flex gap-3">
              <a href="https://www.facebook.com/CulturizateApp" target="_blank">
                <Icon name="facebook-color" />
              </a>
              <a href="https://www.twitter.com/CulturizateApp" target="_blank">
                <Icon name="twitter-color" />
              </a>
              <a
                href="https://www.instagram.com/CulturizateApp"
                target="_blank"
              >
                <Icon name="instagram-color" />
              </a>
            </div>
          </div>
          <div className="mt-9">
            <p className="extra-bold text-xl">{t('download_our_app')}</p>
            <Image
              className="mt-3"
              src={GoogleApple}
              alt="application"
              width={113}
              height={75}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10">
          {navigation.map(({ name, items }, idx) => (
            <div key={idx}>
              <p className="text-xl ">{name}</p>
              <div className="mt-5 flex flex-col space-y-4 text-sm">
                {items.map(({ name, href }, idx) => (
                  <Link className="text-xs" href={href} key={idx}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <p className="text-xl ">{t('newsletter')}</p>
            <div className="mt-5">
              <p className="text-2xl sm:text-3xl ">{t('subscribe')}!</p>
              <TextField
                className="mt-3"
                type="email"
                error={errors.email?.message}
                icon={
                  <button type="submit">
                    <Icon className="w-8 h-8" name="envelop-add-solid" />
                  </button>
                }
                iconPosition="right"
                {...register('email', { required: tf('required') })}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Base;
