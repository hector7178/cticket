import Image from "next/image"

type Props = {
    imageSrc: string
}

export const Icon = ({ imageSrc }: Props) => {
    return (
        <>
            <div className="flex justify-center">
                <Image
                    width={40}
                    height={40}
                    src={imageSrc}
                    alt={imageSrc}
                    className={`object-contain`}
                />
            </div>
        </>
    )
}