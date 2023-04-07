/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Helpers
import { FormStyles } from '@/helpers';
import { AddressForm } from '@/components/forms/forms';
import { User } from "@/interfaces/user";

// cambiar schema
const validationSchema = yup.object().shape({
    addressname: yup.string().required("Address name is required"),
    searchaddress: yup.string(),
    address: yup.string().required("Address line 1 is required"),
    address2: yup.string(),
    pc: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
});

const TicketPosUserCreate = () => {
    const [searchAddress, setSearchAddress] = useState("");
    const [markerPosition, setMarkerPosition] = useState(null);

    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.user'), href: '/panel/admin/user' },
        { page: t('actions.create'), href: '' }
    ]

    const roles = [
        { id: 'ROLE_TICKET_OFFICE', name: "ROLE_TICKET_OFFICE" },
        { id: 'ROLE_POS', name: "ROLE_POS" },
    ]

    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<User>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmitHandler = (data: User) => {
        // updateUser(data)
        console.log({ data });
        reset();
    };

    const onPlaceSelected = (address, latLng) => {
        setSearchAddress(address);
        setMarkerPosition(latLng);
    };

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="email" name={tc('field_email')} />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete={tc('auto_email')}
                                            placeholder={tc('field_email')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="rol" name={tc('field_rol')} />
                                        <select
                                            id="rol"
                                            name="rol"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('field_select_rol')}</option>
                                            {roles.map((rol) => {
                                                return (
                                                    <option key={rol.id} value={rol.id}>{rol.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="pass" name={tc('field_pass')} required />
                                        <input
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            autoComplete={tc('auto_pass')}
                                            placeholder={tc('field_pass')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="repass" name={tc('field_repass')} />
                                        <input
                                            type="password"
                                            name="repass"
                                            id="repass"
                                            autoComplete={tc('field_repass')}
                                            placeholder={tc('field_repass')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <AddressForm register={register} setValue={setValue} errors={errors} searchAddress={searchAddress} onPlaceSelected={onPlaceSelected} markerPosition={markerPosition} />
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

TicketPosUserCreate.Layout = AdminLayout;
export default TicketPosUserCreate;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
