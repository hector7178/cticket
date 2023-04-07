import MainLayout from '@/components/layout/main';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CardQueue from '@/components/main/event/CardQueue';
import HeaderQueue from '@/components/main/event/HeaderQueue';
import QueueImage from 'public/images/assets/main/queue.png';
import { readEvent } from '@/api/event/event';

const index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="relative h-screen">
      <Image
        className="absolute hidden lg:block"
        src={QueueImage}
        width={1440}
        height={479}
        alt="queue-image"
      ></Image>
        <Image
          className="object-cover  h-[50vh] w-full  lg:hidden "
          src={QueueImage}
          fill
          alt="queue-image"
        ></Image>

      <div className="relative z-10 max-w-3xl p-5 mx-auto top-20 lg:top-1/3">
        <HeaderQueue
          className="max-w-xl mx-auto mb-10"
          currentStep={currentStep}
          name="Event 1"
          location="Mexico"
        />
        <CardQueue className="mt-5" queueId="1" number={80} maxNumber={100} />
      </div>
    </div>
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
