
import Image from "next/image";

interface InfoProps {
    name: string,
    imageSrc: string
}

export default function Fundation({ name, imageSrc }: InfoProps) {
    return (
        <div className="flex h-fit w-fit flex-col items-center justify-center space-y-8 text-center">
            <div>
                <Image
                    src={imageSrc}
                    width={120}
                    height={40}
                    className="object-contain"
                    alt={name}
                />
            </div>
            <h1 className="text-2xl font-bold leading-tight">
                {name}
            </h1>
        </div>
    );
}