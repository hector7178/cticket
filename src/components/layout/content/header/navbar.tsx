import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const NavBar = () => {
  const t = useTranslations('Header_Nav');

  const navigation = [
    { name: t('menu.home'), href: '/' },
    { name: t('menu.category'), href: '/category' },
    { name: t('menu.program'), href: '/program' },
    { name: t('menu.search'), href: '/search' },
  ];
  return (
    <div className="bg-[#393939] pb-3">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-center" aria-label="Global">
          <div className="flex gap-x-6 lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
