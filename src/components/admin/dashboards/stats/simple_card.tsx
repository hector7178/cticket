


type Props = {
    name: string,
    amount: string,
    color: string
}

export const SimpleCard = ({name, amount, color}: Props) => {
    return (
        <div key={name} className={`overflow-hidden rounded-lg shadow-xl text-center border-b-[15px] border-${color}`}>
            <div className="p-5">
                <div className="flex items-center">
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dd>
                                <div className="text-xl text-gray-900">{amount}</div>
                            </dd>
                            <dt className="truncate text-lg text-customGray">{name}</dt>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}