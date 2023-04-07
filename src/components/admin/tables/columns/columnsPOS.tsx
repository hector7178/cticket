import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsPOS() {
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
      header: () => tcc('dashboard.pos.event'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('type_sale', {
      id: 'type_sale',
      header: () => tcc('dashboard.pos.type_sale'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('delivery', {
      id: 'delivery',
      header: () => tcc('dashboard.pos.delivery'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('amount', {
      id: 'amount',
      header: () => tcc('dashboard.pos.amount'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('price', {
      id: 'price',
      header: () => tcc('dashboard.pos.price'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('sell_date', {
      id: 'sell_date',
      header: () => tcc('dashboard.pos.sell_date'),
      cell: props => props.getValue()
    })
  ]);
}