import Image from "next/image";


export const CategorySeparator = () => {
    return (
        <>
            <div className={`{w-full rounded-xl bg-gradient-to-t from-customPurple via-white to-white}`}>
                <div className='h-24 sm:h-20 sm:pl-4'>
                    <Image
                        width={120}
                        height={120}
                        src="/images/events/category/cine.png"
                        alt="cine"
                        className="object-contain absolute"
                    />
                </div>
                <div className='text-center align-bottom'>
                    <h1 className="text-white text-lg md:text-4xl font-bold pb-2">Artes Visuales</h1>
                </div>
            </div>
        </>
    )
}