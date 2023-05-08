import React, { useState, useEffect } from 'react';
import { classNames } from '@/helpers';
import { Dropzone } from '@/components/commons';
import {
  ArrowUpOnSquareStackIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';
import { useController, UseControllerProps } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Image from 'next/image'

type props = {
  className?: string;
  multiple?: boolean;
  variant?: 'primary' | 'secondary';
  aspect?: 'square' | 'video';
  label?: string;
  error?: any;
} & UseControllerProps<any>;
const CardUpload: React.FC<props> = ({
  className,
  variant = 'primary',
  multiple = false,
  aspect = 'square',
  label,
  error,
  ...props
}) => {
  const [url, setUrl] = useState<string>(null);
  const {
    field: { value },
  } = useController({ ...props });
  const tp = useTranslations('Panel_Profile_Request');
  const tc = useTranslations('Common_Forms');
  const { name, control } = props;
  return (
    <div className={className}>
      {label && <p className="input-label">{label}</p>}
      <div className={classNames(label && 'mt-3')}>
        <Dropzone
          name={name}
          control={control}
          multiple={multiple}
          setUrl={(url: string) => setUrl(url)}
        >
          {url ? (
            <div
              className={classNames(
                'relative w-full cursor-pointer group',
                aspect == 'square' ? 'aspect-square' : 'aspect-video'
              )}
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center text-white transition bg-black opacity-0 group-hover:opacity-50">
                <CameraIcon className="w-20 h-20" />
              </div>
              <Image className="object-cover" fill alt="upload" src={url} />
            </div>
          ) : (
            <div
              className={classNames(
                'mt-2 flex justify-center items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 w-full h-full',
                aspect == 'square' ? 'aspect-[4/3]' : 'aspect-video'
              )}
            >
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="event_image_web-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>{tc('field_upload_file')}</span>
                    <input
                      id="event_image_web-upload"
                      name="event_image_web-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">{tp('text_drag_n_drop')}</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF {tp('text_up_to')} 10MB
                </p>
              </div>
            </div>
          )}
        </Dropzone>
      </div>
      {error && <p className="mt-1 ml-1 text-xs text-red-500 ">{error}</p>}
    </div>
  );
};

CardUpload.defaultProps = {
  variant: 'primary',
  multiple: false,
  aspect: 'square',
};
export default CardUpload;
