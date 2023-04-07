/** @format */
import { useState } from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
// Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError } from '@/components/forms';
// Helpers
import { CurrentColor, FormStyles } from "@/helpers/index";
// Interface
import { Newslatter } from "@/interfaces/newslatter";
// Icons
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
// Images
import image from "public/images/assets/landing/newsletter/slide.jpg";

const validationSchema = yup.object().shape({
  email: yup.string().email().required()
});

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedError, setSubmittedError] = useState(false);
  const t = useTranslations("Newsletter");
  const tc = useTranslations("Common_Forms");
  const tb = useTranslations("btn");
  const currentColor = CurrentColor();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Newslatter>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: Newslatter) => {
    console.log({ data });
    reset();
    // Handle Submit Form
  };

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} color={currentColor} />

      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
              <p className="mt-4 text-lg leading-8 text-customGray">
                {t('subtitle')}
              </p>
              <div className="mt-6 flex flex-2 flex-col max-w-md gap-x-4">
                {
                  submitted ? (
                    <div>
                      <h2 className="text-3xl tracking-wider font-bold mt-5 text-customGreenVan">
                        {t('success_title')}
                      </h2>
                    </div>
                  ) : submittedError ? (
                    <div>
                      <h2 className="text-xl text-customRed font-bold mt-5">
                        {t('error_title')}
                      </h2>
                      <div className="flex justify-start mt-5">
                        <button

                          className={`rounded-md bg-${currentColor} w-[55%] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
                          onClick={() => setSubmittedError(false)}
                        >
                          {tb('form_back')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmitHandler)} method="POST">
                      <input
                        id="email"
                        type="email"
                        autoComplete={tc('auto_email')}
                        placeholder={tc('field_email')}
                        className={FormStyles('input')}
                        {...register('email')}
                      />
                      <CustomError error={errors.email?.message} />
                      <button
                        type="submit"
                        className={`mt-3 flex-none rounded-md text-white bg-${currentColor} py-2.5 px-3.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
                      >
                        {tb('subscribe_me')}
                      </button>
                    </form>
                  )}
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold">{t('weekly')}</dt>
                <dd className="mt-2 leading-7 text-customGray">
                  {t('weekly_desc')}
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold">{t('spam')}</dt>
                <dd className="mt-2 leading-7 text-customGray">
                  {t('spam_desc')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

Newsletter.Layout = MainLayout;
export default Newsletter;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
