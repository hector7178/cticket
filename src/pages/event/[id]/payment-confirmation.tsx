import MainLayout from '@/components/layout/main';
import React from 'react';
import { useRouter } from 'next/router';
import CardPaymentSuccess from '@/components/main/checkout/CardPaymentSuccess';
import CardPaymentError from '@/components/main/checkout/CardPaymentError';
const index = () => {
  const router = useRouter();
  const { id, success, error } = router.query;
  return (
    <div className="flex items-center justify-center h-[90vh]">
      {(success as string) == 'true' ? (
        <CardPaymentSuccess
          className="mx-auto mas-w-3xl"
          id={id as string}
          description="Your purchase was successfully"
        />
      ) : (
        <CardPaymentSuccess
          className="mx-auto mas-w-3xl"
          id={id as string}
          description="Your purchase was successfully"
        />
      )}
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
