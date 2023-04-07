import { useTranslations } from "next-intl";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";
// Icons
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export const CustomTrace = () => {
    const t = useTranslations("btn");
    const currentColor = CurrentColor();

    return (
        <button
            type="button"
            className={`inline-flex items-center rounded-md bg-${currentColor} gap-x-1.5 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor}-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
        >
            <ArrowUturnLeftIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            {t('form_trace')}
        </button>
    )
}