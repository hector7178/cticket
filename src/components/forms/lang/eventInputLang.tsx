import { useTranslations } from 'next-intl';
// Components
import { CustomLabel } from '@/components/forms';
// Helpers
import { FormStyles } from '@/helpers';
// ICons
import { XMarkIcon} from '@heroicons/react/24/solid';
import { EventCategory } from '@/interfaces/event';

import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';
import { Transition } from '@headlessui/react'

export const EventInputLang = ({
  lang,
  onChange,
  onClick,
  index,
  category,
  num,
  show
  
}: {
  lang?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?:React.MouseEventHandler;
  index?:number;
  category?:any;
  num?:number;
  show?:boolean;
}) => {
  const t = useTranslations('Common_Forms');
  const[Show,setShow]=useState(true)
  
  return (
    

    <div  className="col-span-12 sm:col-span-6 lg:col-span-3 transform transition animate-[pulse_1s_ease-in] duration-[400ms]">
      <div className="h-fit gap-x-16 gap-y-10 border-2">
        <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
          <CustomLabel field="name" name={t('field_name')} />
          <input
            onChange={onChange}
            type="text"
            defaultValue={category?.find((e)=>e.lang===lang)?.name}
            id={lang}
            autoComplete={t('field_name')}
            placeholder={t('field_name')}
            className={FormStyles('input')}
          />
          <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
            {lang}
          </div>
          {num >= 2? < XMarkIcon
            onClick={onClick}
            id={`${index}`}
            name="delete"
            width='1.5rem'
            height='1.5rem'
            className="absolute right-[5%] top-[8%] text-gray-500 hover:text-red-400"
          />:null}
          
        </div>
      </div>
    </div>
   
  );
};
