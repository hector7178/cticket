import { useState } from 'react';
import { useTranslations } from "next-intl";
// Components
import { CustomLabel } from "@/components/forms";
import { FormStyles } from '@/helpers';

type Props = {
    lang: string
}

export const EventLang = ({ lang }: Props) => {
    const t = useTranslations("Common_Forms");

    return (
        <div className="col-span-12 sm:col-span-12 lg:col-span-6">
            <div className="h-[120vw] md:h-[36vw] lg:h-[18vw] gap-x-16 gap-y-10 border-2">
                <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <CustomLabel field='general' name={t('field_general')} />
                            <input
                                type="text"
                                name="general"
                                id="general"
                                autoComplete={t('field_general')}
                                placeholder={t('field_general')}
                                className={FormStyles('input')}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <CustomLabel field='observations' name={t('field_observations')} />
                            <input
                                type="text"
                                name="observations"
                                id="observations"
                                autoComplete={t('field_observations')}
                                placeholder={t('field_observations')}
                                className={FormStyles('input')}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <CustomLabel field='service' name={t('field_service')} />
                            <input
                                type="text"
                                name="service"
                                id="service"
                                autoComplete={t('field_service')}
                                placeholder={t('field_service')}
                                className={FormStyles('input')}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <CustomLabel field='restriction' name={t('field_restriction')} />
                            <input
                                type="text"
                                name="restriction"
                                id="restriction"
                                autoComplete={t('field_restriction')}
                                placeholder={t('field_restriction')}
                                className={FormStyles('input')}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                            <CustomLabel field='limit_access' name={t('field_limit_access')} />
                            <input
                                type="text"
                                name="limit_access"
                                id="v"
                                autoComplete={t('field_limit_access')}
                                placeholder={t('field_limit_access')}
                                className={FormStyles('input')}
                            />
                        </div>
                    </div>
                    <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                        {lang}
                    </div>
                </div>
            </div>
        </div>
    )
}