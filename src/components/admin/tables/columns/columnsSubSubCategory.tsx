import { useTranslations } from 'next-intl';
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, OptionsEvent, SwitchEvent ,Icon} from './components';
// Helpers
import { CurrentColor } from '@/helpers';
import {useDeleteEventSubSubCategory}from '@/hooks/event/event_sub_subcategory'

export function columnsCategory(category: string) {
  const tcc = useTranslations('table_columns');

  const currentColor = CurrentColor();
  const columnHelper = createColumnHelper<any>();
  const {mutate,isLoading,isError,isSuccess,}=useDeleteEventSubSubCategory()  

  return [
    columnHelper.accessor('select', {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div>
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    }),
    columnHelper.accessor('icon', {
      id: 'icon',
      header: () => tcc('admin.event.icon'),
      cell: props => (
        <Icon imageSrc={props.getValue()} />
      ),
    }),
    columnHelper.accessor('category', {
      id: 'category',
      header: () => category,
      cell: (props) => props.getValue(),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => tcc('status'),
      cell: (props) => <SwitchEvent 
      color={currentColor} 
      status={props.row.original.status}  
      id={props.row.original.id} 
      isError={isError}
      isSuccess={isSuccess}
      changeStatus={mutate}/>,
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: (props) => (
        <OptionsEvent id={props.row.original.id} color={currentColor} deleteCategory={mutate}/>
      ),
    }),
  ];
}
