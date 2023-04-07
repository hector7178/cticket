import { Switch as Switch } from '@headlessui/react';
import { useController, UseControllerProps } from 'react-hook-form';
import {classNames} from '@/helpers'
export type props = {
  className?: string;
  color?: 'primary' | 'success';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  error?: string;
} & UseControllerProps;
const Switcher: React.FC<props> = ({
  className,
  color = 'primary',
  size = 'medium',
  label,
  error,
  ...props
}) => {
  const {
    field: { value, onChange },
  } = useController({ ...props });
  return (
    <div className={classNames('flex items-center items', className)}>
      <Switch
        checked={value}
        onChange={onChange}
        className={classNames(
          'relative p-0.5 inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
          value ? (color == 'primary' ? 'bg-primary-500 ' : 'bg-green-600') : 'bg-gray-400',
          size == 'large' ? 'h-[35px] w-[70px]' : size == 'medium' ? 'h-[30px] w-[60px]' : 'h-[25px] w-[50px]'
        )}
      >
        <div
          aria-hidden="true"
          className={classNames(
            value
              ? size == 'large'
                ? 'translate-x-[35px]'
                : size == 'medium'
                ? 'translate-x-[30px]'
                : 'translate-x-[25px]'
              : 'translate-x-0',
            ' pointer-events-none inline-block h-full aspect-square transform rounded-full bg-white  shadow-lg ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <p className="ml-2 text-sm font-medium ">{label}</p>
      {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
    </div>
  );
};

export default Switcher;
