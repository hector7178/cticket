

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
// Helpers
import { classNames } from "@/helpers";
// Components
import { NavigationMenu } from "./navigationMenu";

type Props = {
    path: string,
    color: string
}

export const Navigation = ({path, color}: Props) => {
    let navigation = NavigationMenu(path);

    return (
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
            {navigation.map((item) =>
                !item.children ? (
                    <div key={item.name}>
                        <Link
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? `bg-gray-100 text-${color}`
                                    : `bg-white text-gray-600 hover:bg-${color} hover:text-white`,
                                    `group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium`
                            )}

                        >
                            <item.icon
                                className={classNames(
                                    item.current ? `text-${color}` : `text-gray-600 group-hover:text-white`,
                                    `mr-3 h-6 w-6 flex-shrink-0`
                                )}
                            />
                            {item.name}
                        </Link>
                    </div>
                ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={classNames(
                                        item.current
                                            ? `bg-gray-100 text-${color}`
                                            : `bg-white text-gray-600 hover:bg-${color} hover:text-white`,
                                            `group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-${color}`
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current
                                            ? `mr-3 h-6 w-6 flex-shrink-0 text-${color} group-hover:text-white`
                                            : "mr-3 h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-white"
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span className="flex-1">{item.name}</span>
                                    <svg
                                        className={classNames(
                                            open ? `rotate-90 text-${color}` : 'text-gray-300',
                                            'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-white'
                                        )}
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                    </svg>
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                    {item.children.map((subItem) => (
                                        !subItem.children ? (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={classNames(
                                                    subItem.current
                                                        ? `bg-gray-100 text-${color}`
                                                        : `bg-white text-gray-600 hover:bg-${color} hover:text-white`,
                                                        `group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium`
                                                )}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ) : (
                                            <Disclosure as="div" key={item.name} className="space-y-1">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : `bg-white text-gray-600 hover:bg-${color} hover:text-white`,
                                                                    `group flex w-full items-center rounded-md py-2 pl-11 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-${color}`
                                                            )}
                                                        >
                                                            <span className="flex-1">{subItem.name}</span>
                                                            <svg
                                                                className={classNames(
                                                                    open ? `rotate-90 text-${color}` : 'text-gray-300',
                                                                    'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-white'
                                                                )}
                                                                viewBox="0 0 20 20"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                                            </svg>
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="space-y-1">
                                                            {subItem.children.map((subSubItem) => (
                                                                <Link
                                                                    key={subSubItem.name}
                                                                    href={subSubItem.href}
                                                                    className={classNames(
                                                                        subSubItem.current
                                                                            ? `bg-gray-100 text-${color}`
                                                                            : `bg-white text-gray-600 hover:bg-${color} hover:text-white`,
                                                                            `group flex w-full items-center rounded-md py-2 pl-16 pr-2 text-sm font-medium`
                                                                    )}
                                                                >
                                                                    {subSubItem.name}
                                                                </Link>
                                                            ))}
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                )
            )}
        </nav>
    )
}