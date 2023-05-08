import { useTranslations } from "next-intl";
import Link from 'next/link';
// Helpers
import { CurrentColor } from '@/helpers';
// Icons
import { CpuChipIcon, PencilIcon } from '@heroicons/react/20/solid';

type Props = {
    id?: string,
    name?: string,
    type?: string,
    number?: string,
    expMonth?: number,
    expYear?: number
}

export const CustomCard = ({ id, name, type, number, expMonth, expYear }: Props) => {

    const currentColor = CurrentColor();
    const t = useTranslations("Panel_Profile_Card");
    const newExpYear = String(expYear).slice(2)

    return (
        <div key={id} className="overflow-hidden rounded-lg bg-white shadow">
            <div className={`flex flex-1 p-5 w-80 rounded-lg border border-${currentColor} bg-gradient-to-b from-${currentColor} via-${currentColor} to-white`}>
                <div className="flex flex-col w-[100%] items-left">
                    <div className="flex justify-between text-sm pt-4">
                        <div className="text-white">
                            <CpuChipIcon className='w-6 h-6' aria-hidden="true" />
                        </div>
                        <div className='text-customGreen -mt-3'>
                            <Link href="/panel/profile/card/update">
                                <div className="border-white bg-white rounded-full w-7 h-7 flex align-middle justify-center py-1">
                                    <PencilIcon className='w-5 h-5' aria-hidden="true" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="py-2 text-md">
                        <div className="text-white">
                            XXXX XXXX XXXX {number}
                        </div>
                    </div>
                    <div className="pt-4 text-sm text-customShadow">
                        {t(type)}
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="text-customGray">
                            {name}
                        </div>
                        <div className="text-customGray">
                            {`${expMonth} / ${newExpYear}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}