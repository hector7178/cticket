type Props = {
    field: string,
    name: string,
    required?: boolean
}

export const CustomLabel = ({field, name, required}: Props) => {
    return (
        <label htmlFor={field} className="block text-sm font-medium leading-6 text-customForm">
            {name} {required ? <span className="text-customRed">*</span> : ''}
        </label>
    )
}