/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
import { CurrentColor } from "@/helpers";

const Ticket = () => {
    const currentColor = CurrentColor();

    const t = useTranslations("Panel");
    const ts = useTranslations("Panel_SideBar");

    const breadcrumb = [
        { page: ts('ticket.ticket'), href: '/panel/ticket' },
        { page: ts('dashboard'), href: '' }
    ]

    const stats = [
        { name: 'Total Subscribers', stat: '71,897' },
        { name: 'Avg. Open Rate', stat: '58.16%' },
        { name: 'Avg. Click Rate', stat: '24.57%' },
        { name: 'Avg. Click Rate2', stat: '24.57%' },
        { name: 'Avg. Click Rated', stat: '24.57%' },
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="flow-root">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
                        <dl className="grid sm:grid-cols-2 lg:grid-cols-5 mt-5 gap-5">
                            {stats.map((item) => (
                                <div key={item.name} className={`overflow-hidden rounded-lg bg-white border border-b-[12px] border-customGreen px-4 py-5 shadow sm:p-6`}>
                                    <dt className="truncate text-sm font-medium text-customGray">{item.name}</dt>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

Ticket.Layout = AdminLayout;
export default Ticket;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
