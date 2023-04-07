import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsUserReview() {
  const tcc = useTranslations("table_columns");
  const currentColor = CurrentColor();
  const columnHelper = createColumnHelper<any>();
  
  return ([
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
    columnHelper.accessor('name', {
      id: 'name',
      header: () => tcc('admin.user.name'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => tcc('admin.user.email'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('requested', {
      id: 'requested',
      header: () => tcc('admin.user.requested'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('created', {
      id: 'created',
      header: () => tcc('admin.user.created'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: props => (
        <Options id={props.row.original.id} color={currentColor} edit={true} deleteOpt={false} />
      ),
    })
  ]);
}