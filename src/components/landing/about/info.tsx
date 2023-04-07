import Image, { StaticImageData } from "next/image";

interface InfoProps {
    title: String,
    description: String,
    image: StaticImageData
}

export default function Info({title, description, image}: InfoProps) {
  return (
    <div className="flex justify-center">
        <div className="grid justify-items-center gap-x-1 py-5 md:float-none md:inline-block md:mx-20 lg:float-none lg:inline-block lg:mx-20">
          <div className="items-center md:float-left lg:px-5">
            <h1 className="text-[#2D2C9C] text-[36px] font-bold">{title}</h1>
            <div className="px-[20px] text-center flex items-center w-[300px] h-[100px] md:w-[350px] md:h-[150px] lg:w-[450px] lg:h-[200px] bg-[#F2F2F2] rounded-[20px] border-[1px] border-black">
              {description}
            </div>
          </div>
          <div className="items-center md:float-left px-5">
            <Image src={image} alt="us" className="w-[220px] md:w-[240px] lg:w-[300px]" />
          </div>
        </div>
      </div>
  );
}