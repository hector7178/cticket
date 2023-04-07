/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
// Layout and Header
import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
import Associate from "@/components/landing/partner/associate";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";
// Images
import image from "public/images/assets/landing/partner/slide.jpg";
import partner from "public/images/assets/landing/partner/partner.png";
// Alliance
const alliances = [
  {
    name: 'Friendly',
    imageSrc: '/images/assets/landing/partner/partner.png',
  }
]
// Partners
const partners = [{}]

const Partner = () => {
  const t = useTranslations("Partners");
  const tb = useTranslations("btn");
  const currentColor = CurrentColor();

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} color={currentColor} />

      <div className="relative h-fit w-full">
        <div className="px-[5vw] py-10">
          <div className="flex justify-center sm:hidden">
            <div>
              <Image
                src={partner}
                className="h-fit w-[1000%] md:w-[80%] object-contain"
                alt="main"
              />
            </div>
          </div>
          <div className="flex h-[90vw] md:h-[40vw] lg:h-[15vw] w-full items-start justify-center content-center">
            <div className="hidden sm:flex items-center justify-center self-center">
              <Image
                src={partner}
                className="h-fit w-[70%] object-contain"
                alt="main"
              />
            </div>
            <div className="flex h-full w-[40%] flex-col justify-between">
              <h1 className="text-lg md:text-2xl lg:text-5xl font-bold">
                {t('question')}
              </h1>
              <div className="w-[80%] space-y-6">
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-customGray">
                  {t('answer')}
                </p>
                <Link href="/landing/contact" passHref>
                  <button className={`w-[100%] md:w-[100%] lg:w-[80%] rounded-md border-0 bg-${currentColor} py-2 px-2 text-sm font-bold text-white shadow-lg shadow-customShadow active:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}>
                    {tb('contact_us')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-fit w-full items-center justify-center pt-24 md:pt-12 lg:pt-32 pb-10 text-center">
            <p className="w-[60%] text-lg md:text-2xl font-bold">
              {t('resume')}
            </p>
          </div>
        </div>
        {/** Alliances */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-center text-4xl font-semibold leading-8 text-gray-900">
              {t('alliances')}
            </h1>
            <div className="bg-white py-24 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  {alliances.map((alliance) => (
                    <Associate key={alliance.name} name={alliance.name} imageSrc={alliance.imageSrc} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** Partners 
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-center text-4xl font-semibold leading-8 text-gray-900">
              {t('partners')}
            </h1>
            <div className="bg-white py-24 sm:py-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                  {partners.map((partner) => (
                    <Associate key={partner.name} name={partner.name} imageSrc={partner.imageSrc} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
};

Partner.Layout = MainLayout;
export default Partner;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
