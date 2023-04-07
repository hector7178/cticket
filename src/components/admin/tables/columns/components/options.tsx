import Link from 'next/link';
// Icons
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

type Props = {
    id: number,
    color: string,
    edit?: boolean,
    deleteOpt?: boolean,
    pay?: boolean
}

export const Options = ({id, color, edit = true, deleteOpt = true, pay = false}: Props) => {
    return (
        <div className='flex justify-start'>
          { edit ? (
          <Link href={`/panel/events/special/edit/${id}`} className="px-1">
            <PencilIcon className={`w-4 h-4 hover:text-${color}`} />
          </Link>
          ) : ''}
          { deleteOpt ? (
          <Link href={`/panel/events/special/delete/${id}`} className="px-1">
            <TrashIcon className={`w-4 h-4 hover:text-${color}`} />
          </Link>
          ) : ''}
          { pay ? (
          <Link href={`/panel/events/special/delete/${id}`} className={`px-1 bg-customGreen text-white rounded-md h-8 w-10 text-center pt-2`}>
            Pay
          </Link>
          ) : ''}
        </div>
    )
}