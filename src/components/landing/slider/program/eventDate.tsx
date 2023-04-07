type Props = {
    month: string,
    date: string,
    day: string
}

export const EventDate = ({ month, date, day }: Props) => {
    return (
        <>
            <button>
                <div className="w-28 h-36 py-5 px-6 rounded-lg shadow-xl hover:bg-customForm">
                    <p className="mt-1 text-lg text-center capitalize">
                        {month}
                    </p>
                    <div className="mt-2 text-xl text-center">
                        <span className="absolute inset-0" />
                        {date}
                    </div>
                    <p className="mt-1 text-lf text-center capitalize">
                        {day}
                    </p>
                </div>
            </button>
        </>
    )
}