import Image from "next/image";
// Icons
import { CheckIcon } from '@heroicons/react/20/solid';

type Props = {
    name: string,
    srcImage: string,
    selected?: boolean
}

export const CustomCategory = ({ name, srcImage, selected }: Props) => {
    
    return (
        <label className="">
            <div className="relative">
                <input
                    id={srcImage}
                    type="checkbox"
                    className="customCheckboxes peer absolute opacity-0 "
                />
                <Image
                    width={180}
                    height={180}
                    src={srcImage}
                    className={`object-contain ${selected ? '' : 'grayscale peer-checked:grayscale-0'}`}
                    alt={name}
                />
            </div>
            <p className="text-sm text-customGray text-center py-5">
                {name}
            </p>
        </label>
    )
}