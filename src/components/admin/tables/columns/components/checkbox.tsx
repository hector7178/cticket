import { useEffect, useRef } from 'react';
// Helpers
import { CurrentColor } from '@/helpers/currentColor';

export function Checkbox({
    indeterminate,
    className = '',
    ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) {
    const currentColor = CurrentColor();
    const ref = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ` relative top-1/2 rounded border-gray-300 text-${currentColor} focus:ring-${currentColor}`}
            {...rest}
        />
    )
}