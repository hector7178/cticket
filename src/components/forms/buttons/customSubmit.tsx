import { useTranslations } from "next-intl";
// Helpers
import { CurrentColor } from "@/helpers/currentColor";

type Props = {
    typeText?: string
}

export const CustomSubmit = ({typeText = 'submit'}: Props) => {
    const t = useTranslations("btn");
    const currentColor = CurrentColor();

    return (
        <button
            type="submit"
            className={`inline-flex justify-center rounded-md bg-${currentColor} py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor}-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700`}
        >
            { typeText == 'submit' ? t('form_save') : t('form_send')}
        </button>
    )
}