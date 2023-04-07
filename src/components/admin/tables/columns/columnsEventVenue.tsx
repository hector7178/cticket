import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsEventVenue() {
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
      header: () => tcc('admin.event.venue.name'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('category', {
      id: 'category',
      header: () => tcc('admin.event.venue.category'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('city', {
      id: 'city',
      header: () => tcc('admin.event.venue.city'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('state', {
      id: 'state',
      header: () => tcc('admin.event.venue.state'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('country', {
      id: 'country',
      header: () => tcc('admin.event.venue.country'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('created', {
      id: 'created',
      header: () => tcc('admin.event.venue.created'),
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