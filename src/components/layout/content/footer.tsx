/** @format */
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
// Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Helpers
import { CurrentColor, FormStyles } from "@/helpers/index";
// Interface
import { Newslatter } from "@/interfaces/newslatter";

const validationSchema = yup.object().shape({
  email: yup.string().email().required()
});

export const Footer = () => {
  const tt = useTranslations("Footer_Titles");
  const tm = useTranslations("Footer_Menu");
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

  const navigation = {
    help: [
      { name: tm('help.contact'), href: '/landing/contact' },
    ],
    information: [
      { name: tm('information.about'), href: '/landing/about' },
      { name: tm('information.advert'), href: '/landing/advert' },
      { name: tm('information.donation'), href: '/landing/donation' },
      { name: tm('page.newsletter'), href: '/landing/newsletter' },
      { name: tm('information.partner'), href: '/landing/partner' },
      { name: tm('information.ticket'), href: '/landing/ticket' },
    ],
    page: [
      { name: tm('page.category'), href: '/categories' },
      { name: tm('page.program'), href: '/program' },
      { name: tm('page.search'), href: '/search' },
    ],
    legal: [
      { name: tm('legal.cookie'), href: '/landing/cookies' },
      { name: tm('legal.privacy'), href: '/landing/privacy' },
      { name: tm('legal.term'), href: '/landing/term' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/CulturizateApp',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/CulturizateApp',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }

  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-12 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              src={"/images/assets/logos/logo_bg_black.png"}
              alt="logo"
              width={200}
              height={120}
              className="self-center object-contain mt-2 select-none"
            />
            <p className="text-sm leading-6 text-gray-600">
              {tt('social')}
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{tt('help')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{tt('information')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.information.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{tt('page')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.page.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{tt('legal')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 sm:mt-20 lg:mt-16 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">{tt('newsletter.title')}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              {tt('newsletter.subtitle')}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)} method="POST" className="mt-6 w-80 sm:flex sm:max-w-md lg:mt-0">
            <input
              id="email"
              type="email"
              autoComplete={tc('auto_email')}
              placeholder={tc('field_email')}
              className={FormStyles('input')}
              {...register('email')}
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className={`rounded-md border-0 bg-${currentColor} py-2 px-2 text-sm font-bold text-white shadow-lg shadow-customShadow active:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
              >
                {tb('subscribe_me')}
              </button>
            </div>
          </form>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            {tt('continue.text_first')}
            <Link href="/landing/term" className="text-white no-underline decoration-0">
              {tt('continue.text_terms')}
            </Link>
            {tt('continue.text_conjuntion')}
            <Link href="/landing/term" className="text-white no-underline decoration-0">
              {tt('continue.text_cookies')}
            </Link>
            .
          </p>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            {tt('right')}
          </p>
        </div>
      </div>
    </footer>
  )
}
