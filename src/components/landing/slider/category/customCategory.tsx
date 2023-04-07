import Link from "next/link";
import Image from "next/image";

type Props = {
    name: string,
    srcImage: string
}

export const CustomCategory = ({ name, srcImage }: Props) => {
    
    return (
        <Link href="" className="">
            <div className="flex justify-center">
                <Image
                    width={120}
                    height={120}
                    src={srcImage}
                    alt={name}
                    className={`object-contain`}
                />
            </div>
            <div className="text-sm text-customGray text-center py-5">
                {name}
            </div>
        </Link>
    )
}