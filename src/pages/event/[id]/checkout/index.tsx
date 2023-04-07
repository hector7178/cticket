import React, { useState } from 'react';
import MainLayout from '@/components/layout/main';
import HeaderCheckout from '@/components/main/checkout/HeaderCheckout';
import FooterCheckout from '@/components/main/checkout/FooterCheckout';
import SidebarCheckout from '@/components/main/checkout/SidebarCheckout';
import StepCheckoutQuantity from '@/components/main/checkout/StepCheckoutQuantity';
import StepCheckoutSeats from '@/components/main/checkout/StepCheckoutSeats';
import StepCheckoutTickets from '@/components/main/checkout/StepCheckoutTickets';
import StepCheckoutPayment from '@/components/main/checkout/StepCheckoutPayment';
import { useQuery } from '@tanstack/react-query';
import { readEvent } from '@/api/event/event';
import { readEventVenue } from '@/api/event/event_venue';
import { useRouter } from 'next/router';
import { Event, EventVenue } from '@/interfaces/event';
import { useForm } from 'react-hook-form';
import { useLocale } from 'next-intl';
import { faker } from '@faker-js/faker';
import { toast } from 'react-toastify';
import { useEvent } from '@/hooks/event/event';
import { useEventSchedule } from '@/hooks/event/event_schedule';
type FormData = {
  tickets: number;
  tickets_option: 'digital' | 'pick_up';
};
const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const locale = useLocale();

  const useFormReturn = useForm<FormData>({
    defaultValues: {
      tickets: 1,
      tickets_option: 'digital',
    },
  });
  const { watch, handleSubmit } = useFormReturn;
  const { data: event } = useEvent(id as string);

  const [currentStep, setCurrentStep] = useState(1);
  const [tickets] = watch(['tickets']);
  const content = event?.content.find((content) => content.lang == locale);
  const name = content?.name;
  const location = 'Mexico';
  const onSubmit = (formData: FormData) => {
    try {
      if (currentStep == 1) {
        console.log('1');
        setCurrentStep(2);
      } else if (currentStep == 2) {
        setCurrentStep(3);
      } else if (currentStep == 3) {
        setCurrentStep(4);
      } else {
        toast.success('SuccessF');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      className="py-20 section-container "
      onSubmit={handleSubmit(onSubmit)}
    >
      <HeaderCheckout currentStep={currentStep} />
      <div className="flex flex-col md:flex-row gap-10 mt-24">
        <div className="basis-3/4">
          {currentStep == 1 ? (
            <StepCheckoutQuantity
              name={name}
              location={location}
              price={100}
              {...useFormReturn}
            />
          ) : currentStep == 2 ? (
            <StepCheckoutSeats />
          ) : currentStep == 3 ? (
            <StepCheckoutTickets
              name={name}
              location={location}
              {...useFormReturn}
            />
          ) : (
            <StepCheckoutPayment {...useFormReturn} />
          )}

          <FooterCheckout
            className="mt-10"
            {...{ currentStep, setCurrentStep }}
          />
        </div>
        <div className="basis-1/4">
          <SidebarCheckout
            {...{
              image: faker.image.imageUrl(),
              name: content?.name,
              date: faker.date.future(),
              countTickets: tickets,
              subtotal: faker.datatype.number(),
              fees: faker.datatype.number(),
              discount: faker.datatype.number(),
              total: faker.datatype.number(),
              currentStep,
              ...useFormReturn,
            }}
          />
        </div>
      </div>
    </form>
  );
};

index.Layout = MainLayout;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default index;
