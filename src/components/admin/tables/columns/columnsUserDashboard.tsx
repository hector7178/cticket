import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsUserDashboard() {
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
    columnHelper.accessor('event', {
      id: 'event',
      header: () => tcc('dashboard.user.event'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('event_date', {
      id: 'event_date',
      header: () => tcc('dashboard.user.event_date'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('limit_date', {
      id: 'limit_date',
      header: () => tcc('dashboard.user.limit_date'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('pending', {
      id: 'pending',
      header: () => tcc('dashboard.user.pending'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: props => (
        <Options id={props.row.original.id} color={currentColor} edit={false} deleteOpt={false} pay={true} />
      ),
    })
  ]);
}