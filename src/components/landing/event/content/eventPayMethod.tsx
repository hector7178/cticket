import Image from "next/image"

const payMethod = [
    { name: "Visa", image: "/images/brands/visaBank.png" },
    { name: "MasterCard", image: "/images/brands/masterBank.png" },
    { name: "American Express", image: "/images/brands/amexBank.png" },
]

export const EventPayMethod = () => {
    return (
        <>
            <ul role="list" className="flex items-center space-x-1">
                {payMethod.map((item) => (
                    <li key={item.name}>
                        <span className="sr-only">{item.name}</span>
                        <Image src={item.image} alt={item.name} width={40} height={10} className="object-cover object-center" />
                    </li>
                ))}
            </ul>
        </>
    )
}