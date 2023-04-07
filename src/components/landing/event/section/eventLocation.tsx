// Components
import { CustomTrace } from "@/components/forms"
import { CustomTag } from "@/components/commons/customTag"
// Icons
import { MapPinIcon } from "@heroicons/react/24/solid"


type Props = {
    currentColor: string
}

export const EventLocation = ({ currentColor }: Props) => {
    return (
        <>
            <div className='mt-6'>
                <div className='flex justify-between'>
                    <div className='text-base'>
                        <div className="flex items-center">
                            <MapPinIcon className={`w-5 h-5 text-${currentColor}`} />
                            <span className='px-2'>Location map</span>
                        </div>
                    </div>
                    <div>
                        <CustomTrace />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="relative isolate bg-white py-4">
                        <span>
                            Auditorio Telmex - Av. Obreros de Cananea 746, Industrial los Belenes, 45157 Zapopan, Jal.
                        </span>
                        <div className="flex justify-start w-screen">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.7347204632892!2d-102.54627301188026!3d22.767649335671468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824eb8de657407%3A0x1036f7d9db767840!2sJos%C3%A9%20Sergio%20B%C3%A1ez%20101%2C%20Villas%20del%20Sol%2C%2098067%20Guadalupe%2C%20Zac.!5e0!3m2!1ses-419!2smx!4v1678590382873!5m2!1ses-419!2smx" width="1200" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>

                <div className='flex justify-left'>
                    <div>
                        <CustomTag name={'tag_name'} />
                    </div>
                </div>
            </div>
        </>
    )
}