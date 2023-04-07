/** @format */
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
// Icons
import { PlusIcon } from '@heroicons/react/20/solid';
// Interface
import { User } from "@/interfaces/user";
// Helpers
import { CurrentColor, FormStyles } from "@/helpers";
import { updateUser } from "@/api/user/user";
import { useMutation } from "@tanstack/react-query";

const validationSchema = yup.object().shape({
    firstname: yup.string().min(2).max(32).required('First name is required'),
    surname: yup.string().min(2).max(32).required('Surname is required'),
    username: yup.string().min(2).max(32).required('Username is required'),
    email: yup.string().email().required('Email is required'),
    sex: yup.string().required('Sex is required'),
    birthday: yup.date().required('Birthday is required'),
    phone: yup.string().min(10).max(10).required('Phone is required'),
});

const Profile = () => {
    // const [submitted, setSubmitted] = useState(false);
    // const [submittedError, setSubmittedError] = useState(false);
    // const currentColor = CurrentColor();
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const tb = useTranslations("btn");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>({
        resolver: yupResolver(validationSchema),
    });
    console.log("hect")
    const userMutation = useMutation(updateUser, {
        onSuccess: () => {
            console.log('User updated successfully');
            // reset();
        },
        onError: (error) => {
            console.log('Error updating user:', error);
        },
    });

    const onSubmitHandler = (data: User) => {
        // setSubmitted(false);
        // setSubmittedError(true);
        console.log("heeey")
        console.log("data:", data)
        // userMutation.mutate(data);
    };

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.info'), href: '' }
    ]

    const sexOptions = [
        { value: 'male', name: "Male" },
        { value: 'female', name: "Female" },
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" onSubmit={handleSubmit(onSubmitHandler)} method="POST">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="firstname" name={tc('field_firstname')} />
                                <input
                                    {...register('firstname')}
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    autoComplete={tc('auto_firstname')}
                                    placeholder={tc('field_firstname')}
                                    className={FormStyles('input')}
                                />
                                <CustomError error={errors.firstname?.message} />
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="surname" name={tc('field_surname')} />
                                <input
                                    {...register('surname')}
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    autoComplete={tc('auto_surname')}
                                    placeholder={tc('field_surname')}
                                    className={FormStyles('input')}
                                />
                                <CustomError error={errors.surname?.message} />

                            </div>
                        </div>

                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="username" name={tc('field_username')} />
                                        <input
                                            {...register('username')}
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete={tc('auto_username')}
                                            placeholder={tc('field_username')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.username?.message} />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="email" name={tc('field_email')} />
                                        <input
                                            {...register('email')}
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete={tc('auto_email')}
                                            placeholder={tc('field_email')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.email?.message} />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="sex" name={tc('field_sex')} />
                                        <select
                                            {...register('sex')}
                                            id="sex"
                                            name="sex"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('place_sex')}</option>
                                            {sexOptions.map((item) => {
                                                return (
                                                    <option key={item.value} value={item.value}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="birthday" name={tc('field_birthday')} />
                                        <input
                                            {...register('birthday')}
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            autoComplete={tc('auto_birthday')}
                                            placeholder={tc('field_birthday')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.birthday?.message} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0 -z-10">
                                <CustomLabel field="user-photo" name={tc('field_photo')} />
                                <div className="mt-2 lg:hidden">
                                    <div className="flex items-center">
                                        <div
                                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                            aria-hidden="true"
                                        >
                                            <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80" alt="" />
                                        </div>
                                        <div className="relative ml-5">
                                            <input
                                                id="mobile-user-photo"
                                                name="user-photo"
                                                type="file"
                                                className="peer absolute h-full w-full rounded-md opacity-0"
                                            />
                                            <label
                                                htmlFor="mobile-user-photo"
                                                className="pointer-events-none block rounded-md py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                                            >
                                                <span>{tb('form_change')}</span>
                                                <span className="sr-only">{tc('rs_photo')}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative hidden overflow-hidden rounded-full lg:block">
                                    <img className="relative h-40 w-40 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80" alt="" />
                                    <label
                                        htmlFor="desktop-user-photo"
                                        className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                                    >
                                        <span>{tb('form_change')}</span>
                                        <span className="sr-only">{tc('rs_photo')}</span>
                                        <input
                                            type="file"
                                            id="desktop-user-photo"
                                            name="user-photo"
                                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="phones" name={tc('field_phone')} />
                                <input
                                    {...register('phones')}
                                    type="tel"
                                    name="phones"
                                    id="phones"
                                    autoComplete={tc('auto_phone')}
                                    placeholder={tc('field_phone')}
                                    className={FormStyles('input')}
                                />
                                <CustomError error={errors.phones?.message} />

                                <button>
                                    <PlusIcon />
                                </button>
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

Profile.Layout = AdminLayout;
export default Profile;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
