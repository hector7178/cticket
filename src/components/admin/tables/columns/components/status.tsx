type Props = {
    text: string
}

export const Status = ({text}: Props) => {
    return (
        <>
            <span className={`inline-flex items-center rounded-full ${ text=="active" ? "bg-customGreenVan" : (text=="cancel" ? "bg-customRed" : "bg-customBlueNight")} px-3 py-0.5 text-sm font-medium text-gray-100 capitalize`}>
                {text}
            </span>
        </>
    )
}