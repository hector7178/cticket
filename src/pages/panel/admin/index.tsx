/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
import { CustomCancel, CustomLabel, CustomSubmit } from "@/components/forms";
import { FormStyles } from "@/helpers";

const AdminSetting = () => {
    const t = useTranslations("Panel");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: "Admin", href: '/panel/setting' },
        { page: "Settings", href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="pt-3 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <div className="block text-md font-bold leading-6 text-customForm">
                                    {tc('field_fees')}
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <CustomLabel field="start_0" name={tc('field_start')} required />
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <CustomLabel field="businessname" name={tc('field_end')} required />
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <CustomLabel field="businessname" name={tc('field_amount')} required />
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                {/* Months Without Interests section */}
                                <div className="block text-md font-bold leading-6 text-customForm">
                                    {tc('field_months_without')}
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <CustomLabel field="start_0" name={tc('field_months')} required />
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <CustomLabel field="businessname" name={tc('field_quota')} required />
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                                <div className="pt-3 grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="start_0"
                                            id="start_0"
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200 pt-6">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel />
                                <CustomSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

AdminSetting.Layout = AdminLayout;
export default AdminSetting;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
