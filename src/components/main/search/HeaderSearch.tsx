import React from 'react';
import { classNames } from '@/helpers';
import ListCardCategory, {
  props as ListCardCategoryProps,
} from '@/components/main/commons/ListCardCategory';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Icon } from '@/components/commons';

export type props = {
  className?: string;
} & ListCardCategoryProps &
  UseFormReturn<any>;
const HeaderSearch: React.FC<props> = ({
  className,
  items,
  layout,
  setCurrentPage,
  setPageSize,
  size,
  totalDocs,
  ...useFormReturn
}) => {
  const { register } = useFormReturn;
  return (
    <div className={classNames('', className)}>
      <ListCardCategory
        items={items}
        layout={layout}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        size={size}
        totalDocs={totalDocs}
      />

      <div className="rounded-xl flex items-center pr-4 shadow-xl mt-5 lg:mt-8 overflow-hidden bg-gray-200">
        <input
          type="text"
          {...register('query')}
          className="border-0 focus:outline-0 placeholder:font-semibold p-4 focus:ring-0 bg-transparent w-full"
          placeholder="Search"
        />
        <Icon name="search-icon" className="" />
      </div>
    </div>
  );
};

export default HeaderSearch;
