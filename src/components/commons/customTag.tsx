import Link from 'next/link';
// Helpers
import { CurrentColor } from '@/helpers';
// Icons
import { TagIcon } from '@heroicons/react/20/solid';

type Props = {
    name: string
}

export const CustomTag = ({ name }: Props) => {
    const currentColor = CurrentColor();

    return (
        <div className="inline-block overflow-hidden rounded-lg bg-white shadow">
            <div className={`flex flex-1 justify-center h-10 py-2 px-3 rounded-lg text-${currentColor} border-2 border-${currentColor}`}>
                <div className="inline-block">
                <Link href="#" className="flex">
                    <div className='pr-2'>
                        {name}
                    </div>
                    <TagIcon className='w-5 h-5' aria-hidden="true" />
                </Link>
                </div>
            </div>
        </div>
    )
}