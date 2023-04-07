import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Card Components
import { Attend, Favorite } from "./atoms";
// Icons
import { MapPinIcon } from "@heroicons/react/24/outline";

export const EventCardList = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center ">
            <div className="grid grid-cols-3 h-40 md:h-60 w-[100%] md:px-9 drop-shadow-xl">
                <div className="h-36 md:h-full relative col-span-1 rounded-l-[2rem]">
                    <Image src="/images/events/event/prueba01.webp" alt="prueba" fill />
                    <Favorite />
                <Attend />
                </div>
                <div className="h-36 md:h-full col-span-2 flex flex-col items-start justify-start rounded-r-[2rem] bg-white border-t-[20px] border-customPurple">
                    <div className="h-full w-full justify-self-center rounded-br-[2rem] ">
                        <div className="h-full px-5">
                            <div className="flex h-full w-full flex-col justify-center space-y-2 md:space-y-5">
                                <h1 className="text-sm md:text-xl font-bold capitalize">Aladín - El Deslumbrante Show De Brodway</h1>
                                <div>
                                    <p className="text-[10px] md:text-base font-light text-customGray">
                                        Martes, 16 Enero 2023 - 19:00 - 00:00 hrs
                                    </p>
                                </div>
                                <div className="flex items-center space-x-1 text-customGray truncate ...">
                                    <MapPinIcon name="location" className="w-4 md:w-5 h-4 md:h-5" />
                                    <p className="text-[10px] md:text-base leading-tight">
                                        Centro cultural, Ciudad de México
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
