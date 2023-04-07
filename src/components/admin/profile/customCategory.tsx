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
        <label>
            <div className="relative ">
                <input
                    id={srcImage}
                    type="checkbox"
                    className="customCheckboxes peer absolute opacity-0 "
                />
                <Image
                    width={120}
                    height={120}
                    src={srcImage}
                    className={`object-contain ${selected ? '' : 'grayscale peer-checked:grayscale-0'}`}
                    alt={name}
                />
                <div className={`tick absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-customGreen peer-checked:opacity-100 ${selected ? '' : 'opacity-0'}`}>
                    <CheckIcon
                        name="check"
                        className="iconshow absolute text-sm text-white"
                    />
                </div>
            </div>
            <p className="text-sm text-customGray text-center py-5">
                {name}
            </p>
        </label>
    )
}