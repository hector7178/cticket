import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath, query } = useRouter();

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.push({ pathname, query }, asPath, { locale: value })
  };

  return (
    <>
      <select
          id="locale"
          name="locale"
          className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
          defaultValue={locale}
          onChange={handleLangChange}
        >
          {locales?.map((l, i) => {
            return (
              <option key={i} value={l}>
                  {l}
              </option>
            );
          })}
      </select>
    </>
  );
}