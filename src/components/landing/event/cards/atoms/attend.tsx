import { useTranslations } from "next-intl";
// Icons
import { CheckIcon } from "@heroicons/react/24/solid";

export const Attend = () => {
    const t = useTranslations('Public');

    return (
        <div className="absolute bottom-0 right-0 m-3 flex bg-customGreen text-white p-2 rounded-3xl text-sm">
            <button className="flex">
                <CheckIcon className="w-5 h-5" />
                {t('event.attend')}
            </button>
        </div>
    )
}