import { useState, useEffect, InputHTMLAttributes } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// Helpers
import { CurrentColor } from '@/helpers/currentColor';

// A debounced input react component
export function SearchInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const currentColor = CurrentColor();
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <div className="flex basis-1/2 justify-start py-2">
            <div className="relative w-[40%] md:w-[40%] lg:w-[30%] ml-2 rounded-md shadow-sm">
                <input {...props} value={value} onChange={e => setValue(e.target.value)} className={`block w-full pl-2 min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-${currentColor} sm:text-sm sm:leading-6`} />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
        </div>
    )
}