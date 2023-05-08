import React, { useCallback, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { useController, UseControllerProps } from 'react-hook-form';

type props = {
  multiple?: boolean;
  setUrl?: (url: string) => void;
  children?: React.ReactNode;
} & UseControllerProps<any, any>;
const index: React.FC<props> = ({ multiple, setUrl, children, ...props }) => {
  const {
    field: { onChange, value },
  } = useController({ ...props });
  const onDrop = useCallback((acceptedFiles) => {
    onChange(multiple ? acceptedFiles : acceptedFiles[0]);
  }, []);
  useEffect(() => {
    if (value) {
      if (typeof value == 'string') {
        setUrl(value);
      } else {
        try {
          setUrl(URL?.createObjectURL(value));
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }, [value]);

  return (
    <Dropzone
      onDrop={onDrop}
      multiple={multiple}
      accept={{ 'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.svg'] }}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {children}
        </div>
      )}
    </Dropzone>
  );
};

export default index;