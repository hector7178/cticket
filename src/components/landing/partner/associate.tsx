
import Image from "next/image";

interface InfoProps {
    name: string,
    imageSrc: string
}

export default function Associate({ name, imageSrc }: InfoProps) {
    return (
        <div className="bg-gray-400/5 p-6 sm:p-10">
            <Image
                className="max-h-12 w-full object-contain"
                src={imageSrc}
                alt={name}
                width={158}
                height={48}
            />
        </div>
    );
}