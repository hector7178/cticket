import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
// Components
import { CustomLabel, CustomError } from '@/components/forms';
import { FormStyles } from '@/helpers';
import { useFormContext, Controller,useForm} from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/solid';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }, { color: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'color',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

type Props = {
  index?: number,
  control?:any,
  onClick?:React.MouseEventHandler;
  lang:string;


};

export const InputSpecial = ({ index = 0, control, onClick,lang}: Props) => {
  
  const formMethods = useFormContext();
  const t = useTranslations('Common_Forms');
  formMethods?.setValue(`category.${index}.lang`,lang);
  const baseErrors = formMethods?.formState?.errors?.['category']?.[index];
  return (
    <div className="col-span-12 sm:col-span-12 lg:col-span-6">
      <div className="h-fit sm:h-fit lg:h-fit gap-x-16 gap-y-10 border-2">
        <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
          <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
               <div className='col-span-10 md:col-span-6 flex flex-row gap-4 justify-between'>
                
              <CustomLabel field="name" name={t('field_name')} />
              {baseErrors?.['name'] && (
                <CustomError
                  error={baseErrors?.['name']?.message}
                />
              )}
              </div>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete={t('field_name')}
                placeholder={t('field_name')}
                className={FormStyles('input')}
                {...(formMethods?.register(
                    `category.${index}.name`
                ) || {})}
              />
             
            </div>
            <div className="col-span-12">
              <div className='col-span-10 md:col-span-6 flex flex-row gap-4 justify-between'>
               
              <CustomLabel field="description" name={t('field_description')} />
              {baseErrors?.['description'] && (
                <CustomError
                  error={baseErrors?.['description']?.message}
                />
              )}
              </div>
              <Controller
                control={control}
                name={`category.${index}.description`}
                render={({ field: { onChange, value } }) => (
                  <QuillNoSSRWrapper
                    modules={modules}
                    formats={formats}
                    onChange={onChange}
                    value={value}
                    theme="snow"
                    className="h-auto sm:h-auto"
                  />
                )}
              />
             
            </div>
          </div>
          <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
            {lang}
          </div>
           {index > 0? < XMarkIcon
            onClick={onClick}
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
