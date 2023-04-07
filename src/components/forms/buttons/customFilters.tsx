import { useTranslations } from "next-intl";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";

type Props = {
    text?: string
}

export const CustomFilters = ({text = 'apply'}: Props) => {
    const t = useTranslations("btn");
    const currentColor = CurrentColor();

    return (
        <button
            type="button"
            className={`inline-flex justify-center rounded-md ${text == 'apply' ? `bg-${currentColor}` : 'bg-customGray'} py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor}-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
        >
            {text == 'apply' ? t('form_apply_filters') : t('form_clear_filters')}
        </button>
    )
}