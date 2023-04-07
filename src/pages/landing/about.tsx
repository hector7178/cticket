/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
// Layout and Header
import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";
// Images
import image from "public/images/assets/landing/about/slide.jpg";
import us from "public/images/assets/landing/about/us.png";
import mision from "public/images/assets/landing/about/mision.png";
import vision from "public/images/assets/landing/about/vision.png";
// Vectors images
import vector1 from "public/images/assets/landing/about/vector1.png";
import vector2 from "public/images/assets/landing/about/vector2.png";
import vector3 from "public/images/assets/landing/about/vector3.png";
import vector4 from "public/images/assets/landing/about/vector4.png";
import vector5 from "public/images/assets/landing/about/vector5.png";

const About = () => {
  const t = useTranslations("About");
  const currentColor = CurrentColor();

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} color={currentColor}/>

      <div className="relative h-fit w-full">
        <div className="flex justify-center">
          <div className="py-5 md:float-none md:inline-block md:mx-20 lg:float-none lg:inline-block lg:mx-20">
            <div className="items-center md:float-left lg:px-5">
              <h1 className={`text-${currentColor} text-[36px] font-bold`}>{t('about')}</h1>
              <div className="px-[20px] text-center flex items-center w-[300px] h-[100px] md:w-[350px] md:h-[150px] lg:w-[450px] lg:h-[200px] bg-[#F2F2F2] rounded-[20px] border-[1px] border-black">
              {t('about_desc')}
              </div>
            </div>
            <div className="items-center md:float-left px-5">
              <Image src={us} alt="us" className="w-[220px] md:w-[240px] lg:w-[300px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-5 md:float-none md:inline-block md:mx-20 lg:float-none lg:inline-block lg:mx-20">
            <div className="items-center md:float-left px-5">
              <Image src={mision} alt="us" className="w-[220px] md:w-[240px] lg:w-[300px]" />
            </div>
            <div className="items-center md:float-left lg:px-5">
              <h1 className={`text-${currentColor} text-[36px] font-bold`}>{t('mision')}</h1>
              <div className="px-[20px] text-center flex items-center w-[300px] h-[100px] md:w-[350px] md:h-[150px] lg:w-[450px] lg:h-[200px] bg-[#F2F2F2] rounded-[20px] border-[1px] border-black">
              {t('mision_desc')}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-5 md:float-none md:inline-block md:mx-20 lg:float-none lg:inline-block lg:mx-20">
            <div className="items-center md:float-left lg:px-5">
              <h1 className={`text-${currentColor} text-[36px] font-bold`}>{t('vision')}</h1>
              <div className="px-[20px] text-center flex items-center w-[300px] h-[100px] md:w-[350px] md:h-[150px] lg:w-[450px] lg:h-[200px] bg-[#F2F2F2] rounded-[20px] border-[1px] border-black">
              {t('vision_desc')}
              </div>
            </div>
            <div className="items-center md:float-left px-5">
              <Image src={vision} alt="us" className="w-[220px] md:w-[240px] lg:w-[300px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-5">
          <h1 className="text-[24px] font-bold text-center">{t('offert')}</h1>
        </div>

        <div className="flex justify-center py-5">
          <div className="grid text-center md:flex md:justify-center md:mx-20">
            <div className="items-center py-3 px-3 lg:w-[15%]">
              <div className="flex justify-center py-4">
                <Image src={vector1} alt="us" className="w-[80px] h-[90px]" />
              </div>
              <p className="text-[24px] md:text-[20px]">{t('public')}</p>
            </div>
            <div className="inline-block py-3 px-3 lg:w-[15%]">
              <div className="flex justify-center py-4">
                <Image src={vector2} alt="us" className="w-[80px] h-[90px]" />
              </div>
              <p className="text-[24px] md:text-[20px]">{t('visualize')}</p>
            </div>
            <div className="inline-block py-3 px-3 lg:w-[15%]">
              <div className="flex justify-center py-4">
                <Image src={vector3} alt="us" className="w-[80px] h-[90px]" />
              </div>
              <p className="text-[24px] md:text-[20px]">{t('mark')}</p>
            </div>
            <div className="inline-block py-3 px-3 lg:w-[15%]">
              <div className="flex justify-center py-4">
                <Image src={vector4} alt="us" className="w-[80px] h-[90px]" />
              </div>
              <p className="text-[24px] md:text-[20px]">{t('share')}</p>
            </div>
            <div className="inline-block py-3 px- lg:w-[15%]">
              <div className="flex justify-center py-4">
                <Image src={vector5} alt="us" className="w-[80px] h-[90px]" />
              </div>
              <p className="text-[24px] md:text-[20px]">{t('route')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.Layout = MainLayout;
export default About;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
