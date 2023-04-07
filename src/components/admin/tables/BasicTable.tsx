
import { useState } from 'react';
import { useTranslations } from "next-intl";
import {
    getFilteredRowModel,

    getPaginationRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,

    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
// Helpers
import { CurrentColor } from "@/helpers/currentColor";
// Components
import { SearchInput, DOTS, PaginationTable } from './components/index';
// Icons
import {
    ChevronDownIcon,
    ChevronUpIcon,
    ChevronUpDownIcon,

    ChevronDoubleLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleRightIcon,

    TrashIcon,
    ArrowUpTrayIcon
} from '@heroicons/react/24/outline';

type Props= {
    columns: any[],
    defaultData: any[],
    addSchedule?: boolean
}

export const BasicTable = ({ columns, defaultData, addSchedule = false }: Props) => {
    const t = useTranslations("table");

    const currentColor = CurrentColor();
    const [data, setData] = useState(() => [...defaultData])
    const [sorting, setSorting] = useState<SortingState>([])

    const [rowSelection, setRowSelection] = useState({})
    const [globalFilter, setGlobalFilter] = useState('')

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            rowSelection,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,

        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,

        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),

        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    })
    
    const paginationRange = PaginationTable({
        totalPageCount: table.getPageCount(),
        currentPage: table.getState().pagination.pageIndex
    });

    return (
        <>
            <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                <div className="inline-block w-[100%] text-base font-semibold leading-6 text-gray-900">
                    <SearchInput
                        value={globalFilter ?? ''}
                        onChange={value => setGlobalFilter(String(value))}
                        className="p-2 font-lg shadow border border-block"
                        placeholder="Search..."
                    />
                    <div className="flex justify-end -mt-10">
                        <button 
                        className={`ml-3 inline-flex items-center rounded-md bg-${currentColor} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${currentColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${currentColor}`}>
                            Add Schedule
                        </button>
                    </div>
                </div>
                { Object.keys(rowSelection).length > 0 ? (
                    <div className="mt-3 flex sm:mt-0 sm:ml-4">
                        <button
                        type="button"
                        className={`ml-3 inline-flex items-center rounded-md bg-${currentColor} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                        >
                            <TrashIcon className={`w-4 h-4 mr-2`} />({Object.keys(rowSelection).length})
                        </button>
                        <button
                        type="button"
                        className={`ml-3 inline-flex items-center rounded-md bg-${currentColor} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                        >
                            <ArrowUpTrayIcon className={`w-4 h-4 mr-2`} />({Object.keys(rowSelection).length})
                        </button>
                    </div>
                    ) : ('')
                }
            </div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead className={`bg-${currentColor}`}>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} scope="col" className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ${header.id == 'select' ? 'w-[6%]' : ''} ${header.id == 'options' ? 'w-[10%]' : ''}`}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: header.column.getCanSort()
                                                        ? 'cursor-pointer select-none'
                                                        : '',
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                <div className="flex items-center justify-between text-white">
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    <span>
                                                        {{
                                                            asc: <ChevronUpIcon className="w-5 h-5 text-white" />,
                                                            desc: <ChevronDownIcon className="w-5 h-5 text-white" />,
                                                        }[header.column.getIsSorted() as string] ?? <ChevronUpDownIcon className="w-5 h-5 text-white" />}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between">
                    <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div className=''>
                            <p className="text-sm text-gray-700">
                                {t('page')} <span className="font-medium">
                                {table.getState().pagination.pageIndex + 1}</span> {t('of')} <span className="font-medium">
                                {table.getPageCount()}
                                </span> {t('of')}{' '}
                                <span className="font-medium">{table.getPrePaginationRowModel().rows.length}</span> {t('results')}
                            </p>
                        </div>
                        <div  className='flex justify-center'>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button
                                    type="button"
                                    className={`cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0 hover:text-${currentColor}`}
                                    onClick={() => table.setPageIndex(0)}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    <span className="sr-only">{t('init')}</span>
                                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className={`cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0 hover:text-${currentColor}`}
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    <span className="sr-only">{t('previous')}</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {paginationRange?.map((pageNumber, index) => {
                                    if (pageNumber === DOTS) {
                                        return (
                                            <div key={index} className={`{relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0}`}>
                                            ...
                                            </div>
                                        );
                                    }

                                    if ((Number(pageNumber) - 1) === table.getState().pagination.pageIndex) {
                                        return (
                                            <div
                                                key={index}
                                                className={`{relative z-10 inline-flex items-center text-${currentColor} px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2}`}
                                                onClick={() => table.setPageIndex(Number(pageNumber) - 1)}>{pageNumber}</div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className={`cursor-pointer relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex hover:text-${currentColor}`}
                                            onClick={() => table.setPageIndex(Number(pageNumber) - 1)}>{pageNumber}</div>
                                    );
                                })}
                                <button
                                    type="button"
                                    className={`cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0 hover:text-${currentColor}`}
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    <span className="sr-only">{t('next')}</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className={`cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0 hover:text-${currentColor}`}
                                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                    disabled={!table.getCanNextPage()}
                                >
                                    <span className="sr-only">{t('end')}</span>
                                    <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </nav>
                        </div>
                        <div className=''>
                            {t('showing')}:&nbsp;
                            <select
                                value={table.getState().pagination.pageSize}
                                onChange={e => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                                className={`{rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-${currentColor} sm:text-sm sm:leading-6}`}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        {pageSize} {t('results')}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}