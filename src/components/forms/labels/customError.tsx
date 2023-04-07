type Props = {
    error?: string
}

export const CustomError = ({ error }: Props) => {
    return (
        <p className="py-1 text-sm text-customRed">{error}</p>
    )
}