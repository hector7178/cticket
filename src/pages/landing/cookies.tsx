/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import MainLayout from "@/components/layout/main";
import Section from "@/components/headers/landing/section";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";

const Cookies = () => {
  const t = useTranslations("Cookie");
  const currentColor = CurrentColor();

  return (
    <div>
      <Section title={t('page')} color={currentColor} />

      <div className="bg-white py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
          <p className="mt-6 text-xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit sagittis est, id feugiat enim dictum nec. Morbi auctor risus bibendum, mattis ipsum eu, vehicula metus. Sed cursus id magna et eleifend. Sed congue tristique odio. Maecenas dignissim nibh mauris. Phasellus quis dolor a odio scelerisque placerat vitae eu magna. Suspendisse dictum posuere quam, ac accumsan mauris ultrices ac. Quisque ac nunc massa. Duis eleifend mauris ut metus interdum, vitae ultricies purus vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ligula a justo vestibulum accumsan. Nunc hendrerit tortor non euismod luctus. In rutrum gravida nunc at convallis. In leo dui, tincidunt et porttitor vel, mattis vitae metus. Proin ultrices congue elit semper bibendum.

            In accumsan sagittis metus, sed scelerisque ante aliquam id. In congue nibh in convallis finibus. Mauris consectetur, odio sit amet placerat mattis, nisi lacus pulvinar leo, eget rutrum augue nunc eget dolor. Integer vehicula finibus diam non condimentum. Curabitur in dui in mi dapibus suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam convallis, tellus eget cursus commodo, arcu lectus pulvinar odio, et fermentum libero ante placerat tellus.

            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut bibendum, purus fringilla facilisis congue, quam metus tempus orci, at laoreet lacus nisi non nisi. Aliquam hendrerit nunc sit amet rhoncus placerat. Quisque vulputate ultricies ligula, at condimentum tellus accumsan nec. Praesent eget dictum neque. Ut convallis convallis purus, nec tristique nulla vehicula ut. Mauris maximus metus vitae nunc tristique pulvinar. Donec ut auctor libero. Proin eleifend erat vitae cursus ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sollicitudin venenatis augue quis elementum. Curabitur dignissim nec mauris quis aliquam. Vivamus ipsum libero, volutpat id placerat id, posuere convallis nisi. Sed maximus malesuada nisl, a lobortis ligula dictum sed. Pellentesque in pretium augue. Fusce dolor mauris, vestibulum vitae nisl vel, feugiat ultricies mauris.

            Suspendisse venenatis rhoncus imperdiet. Cras tristique, libero eu facilisis sodales, nisi sem sollicitudin dui, vitae blandit nisi libero a risus. Etiam non ligula arcu. Pellentesque id metus risus. Donec id dui at diam commodo ullamcorper. Ut ut egestas nulla, fringilla pulvinar risus. Morbi tempus justo ac tortor volutpat consectetur.

            Fusce iaculis auctor cursus. Mauris dapibus, urna at maximus elementum, arcu nisi mattis felis, sit amet volutpat ex dolor at mi. Vestibulum commodo mattis ligula, at semper nisl suscipit vitae. Phasellus ac odio turpis. Suspendisse blandit sodales aliquam. Sed ac enim sit amet urna laoreet malesuada. Vestibulum dignissim pulvinar porttitor. Morbi accumsan bibendum arcu in pellentesque.

            Nam interdum sapien vitae consequat commodo. Suspendisse potenti. Aliquam condimentum sit amet leo sit amet laoreet. Cras nec orci leo. Pellentesque et posuere enim, ac finibus purus. Vivamus lacinia mauris sit amet quam lobortis mattis. Vivamus nulla turpis, aliquam vel quam a, molestie tristique eros. Nunc porta nisl at sapien congue auctor.

            Donec quis diam dictum, mattis arcu ac, sodales enim. Cras at ultricies mi, sit amet aliquam nibh. Integer vitae cursus mauris, nec molestie enim. Vivamus a nisl tempus, consequat lorem vel, bibendum libero. In pharetra ex in semper tempor. Etiam lacus enim, tempus vitae laoreet vel, maximus ut lorem. Cras consequat placerat luctus. Integer in purus pellentesque, malesuada odio ut, bibendum dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

Cookies.Layout = MainLayout;
export default Cookies;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
