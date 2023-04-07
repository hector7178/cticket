import { useTranslations } from "next-intl";

export const TopEvents = () => {
    const t = useTranslations("table_columns");

    const columns = [
        t('dashboard.top.event'), 
        t('dashboard.top.visit'), 
        t('dashboard.top.sold'), 
        t('dashboard.top.attend'), 
        t('dashboard.top.click')
    ]
    const defaultData = [
        {id: 1, event: 'test', visit: 200, sold: 200, attend: 100, click: 100},
        {id: 2, event: 'test2', visit: 200, sold: 200, attend: 100, click: 100}
    ]

    return (
        <div className="mt-8 flow-root">
            <h1>TOP 5 Events</h1>
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-customBlue">
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {defaultData.map((data) => (
                                    <tr key={data.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {data.event}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.visit}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.sold}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.attend}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.click}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}