import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, Status } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsTicketList() {
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
      header: () => tcc('ticket.list.event'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => tcc('ticket.list.date'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('available', {
      id: 'available',
      header: () => tcc('ticket.list.available'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('sold', {
      id: 'sold',
      header: () => tcc('ticket.list.sold'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('income', {
      id: 'income',
      header: () => tcc('ticket.list.income'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => tcc('status'),
      cell: props => (
        <Status text={props.getValue()}/>
      ),
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: props => (
        <Options id={props.row.original.id} color={currentColor} />
      ),
    })
  ]);
}