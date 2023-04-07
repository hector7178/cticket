import { useState } from "react";
import { useTranslations } from "next-intl";
import DatePicker, { DateObject } from "react-multi-date-picker"
// Helpers
import { FormStyles } from "@/helpers"
// Buttons
import { CustomFilters } from "../buttons"

const CustomRangeInput = ({ openCalendar, value }: any) => {
    let from = new DateObject(value[0])?.format("DD / MMMM / YYYY") || "";
    let to = new DateObject(value[1]).format("DD / MMMM / YYYY") || "";

    return (
        <div className='w-full flex flex-row overflow-hidden border-[2px] border-customForm rounded-md '>
            <input className='w-[50%] py-1 text-center text-sm md:text-base border-r border-r-customForm text-customForm' onFocus={openCalendar} value={from} readOnly />
            <input className='w-[50%] py-1 text-center text-sm md:text-base text-customForm' onFocus={openCalendar} value={to} readOnly />
        </div>
    );
}

export const FormSearchFilter = () => {
    const t = useTranslations("Common_Forms");
    const [dateValues, setDateValues] = useState<[DateObject, DateObject]>([new DateObject(), new DateObject()]);
    
    return (
        <>
            {/* Filters */}
            <form className="space-y-5 divide-y divide-gray-200">
                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_categories')}</legend>
                        <div className="pt-6 space-y-3">
                            <select
                                id="category"
                                name="category"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_categories')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_subcategories')}</legend>
                        <div className="pt-6 space-y-3">
                            <select
                                id="subcategory"
                                name="subcategory"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_subcategories')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_subsubcategories')}</legend>
                        <div className="pt-6 space-y-3">
                            <select
                                id="sub_subcategory"
                                name="sub_subcategory"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_select_subsubcategory')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_range_date')}</legend>
                        <div className="pt-6 space-y-3">
                            <DatePicker
                                className="rmdp-prime"
                                value={dateValues}
                                onChange={setDateValues as any}
                                numberOfMonths={2}
                                range
                                render={<CustomRangeInput value={dateValues} />}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_location')}</legend>
                        <div className="pt-6 space-y-3">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                autoComplete={t('field_location')}
                                placeholder="location"
                                className={FormStyles('input')}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className='pt-5'>
                    <fieldset className='flex justify-end'>
                        <div className='px-1'>
                            <CustomFilters text="clear" />
                        </div>
                        <div className='px-1'>
                            <CustomFilters />
                        </div>
                    </fieldset>
                </div>
            </form>
        </>
    )
}