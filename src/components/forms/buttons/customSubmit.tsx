import { useTranslations } from 'next-intl';
// Helpers
import { CurrentColor } from '@/helpers/currentColor';

type Props = {
  typeText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomSubmit = ({ typeText = 'submit', ...props }: Props) => {
  const t = useTranslations('btn');
  const currentColor = CurrentColor();

  return (
    <button
      className={`inline-flex justify-center rounded-md bg-${currentColor} py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor}-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
      {...props}
    >
      {typeText == 'submit' ? t('form_save') : t('form_send')}
    </button>
  );
};
