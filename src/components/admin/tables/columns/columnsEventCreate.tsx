import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, Status, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function ColumnsEventCreate() {
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
    columnHelper.accessor('date', {
      id: 'date',
      header: () => tcc('event.event.create.date'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('initial_hour', {
      id: 'initial_hour',
      header: () => tcc('event.event.create.initial_hour'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('final_hour', {
      id: 'final_hour',
      header: () => tcc('event.event.create.final_hour'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('low_cost', {
      id: 'low_cost',
      header: () => tcc('event.event.create.low_cost'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('regular_cost', {
      id: 'regular_cost',
      header: () => tcc('event.event.create.regular_cost'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('hight_cost', {
      id: 'hight_cost',
      header: () => tcc('event.event.create.hight_cost'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('url', {
      id: 'url',
      header: () => tcc('event.event.create.url'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('streaming', {
      id: 'streaming',
      header: () => tcc('event.event.create.streaming'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => tcc('status'),
      cell: props => (
        <SwitchTable color={currentColor} />
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