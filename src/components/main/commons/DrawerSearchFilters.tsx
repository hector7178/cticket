import React, { Fragment, useEffect, useState } from 'react';
import { classNames } from '@/helpers';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Button, Icon, Select, TextField, Title } from '@/components/commons';
import SidebarSearch from './SidebarSearch';
import { EventCategory } from '@/interfaces/event';

export type props = {
  className?: string;
  isOpen: boolean;
  close: () => void;
  categories: EventCategory[];
} & UseFormReturn;

const DrawerSearchFilters: React.FC<props> = ({
  className,
  isOpen,
  close,
  ...useFormReturn
}) => {
  const { register } = useFormReturn;
  const t = useTranslations('Drawer_Search_Filters');
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto overflow-y-auto relative w-screen max-w-md">
                  <SidebarSearch close={close} {...useFormReturn} />
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DrawerSearchFilters;
