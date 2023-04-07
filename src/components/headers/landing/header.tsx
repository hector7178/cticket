import Image, { StaticImageData } from "next/image";

interface HeaderProps {
    image: StaticImageData;
}

export default function Header({image}: HeaderProps) {
  return (
    <div className="h-[250px] md:h-[400px] lg:h-[690px] w-[100%] bg-white relative -z-10">
      <Image src={image} fill alt="img" className="h-full w-full object-cover object-center" />
    </div>
  );
}
