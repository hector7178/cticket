import Link from "next/link";
import { useTranslations } from "next-intl";
import { Disclosure } from '@headlessui/react'
// Helpers
import { classNames } from "@/helpers";
// Icons
import {
    Squares2X2Icon,
    UsersIcon,
    CalendarIcon,
    BanknotesIcon,
    TicketIcon,
    AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'

type Props = {
    path: string,
    color: string
}

export const Menu = ({path, color}: Props) => {
    const t = useTranslations("Panel");
    const tm = useTranslations("Panel_Menu");
    const navigation = [
        { name: tm('dashboard'), icon: Squares2X2Icon, current: path.split('/').length<3, href: '/panel/' },
        { name: tm('profile'), icon: UsersIcon, current: path.includes('profile'), href: '/panel/profile' },
        { name: tm('event'), icon: CalendarIcon, 
            current: ((path.includes('event') && path.split('/').length<4) || path.includes('event/create') || path.includes('event/discount') || path.includes('event/special')), 
            href: '/panel/event' },
        { name: tm('pos'), icon: BanknotesIcon, current: path.includes('pos') && path.split('/').length<4, href: '/panel/pos' },
        { name: tm('ticket'), icon: TicketIcon, current: path.includes('ticket')?true:false, href: '/panel/ticket' },
        { name: tm('admin'), icon: AdjustmentsVerticalIcon, current: path.includes('admin')?true:false, href: '/panel/admin' },
    ]

    return (
        <Disclosure as="nav" className={`h-[120px] md:h-[100px] py-4 sm:py-2 shadow bg-gradient-to-b from-${color} via-${color} to-white`}>
            <div className="mx-auto max-w-7xl px-2 md:px-4 lg:px-8">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="space-x-3 md:ml-6 sm:flex sm:space-x-6 md:space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-white'
                                            : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-gray-200'
                                            )}
                                >
                                    <item.icon
                                        className="mr-3 h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="flex flex-shrink-0 items-center text-white text-3xl">
                            {t('title')}
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}