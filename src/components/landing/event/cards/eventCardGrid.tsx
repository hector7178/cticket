import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Card Components
import { Attend, Favorite } from "./atoms";
// Icons
import { MapPinIcon } from "@heroicons/react/24/outline";

export const EventCardGrid = () => {
    return (
        <div className="px-8 sm:px-4 py-4 drop-shadow-xl">
            <div className="relative h-64 w-70 lg:w-80 rounded-t-[2rem] border-b-[20px] border-customBlue">
                <Image src="/images/events/event/prueba01.webp" alt="prueba" fill />
                <Favorite />
                <Attend />
            </div>
            <div className="w-70 lg:w-80 rounded-b-[2rem] border-x-customForm shadow-lg bg-white">
                <div className="space-y-3 px-4 py-5">
                    <h1 className="text-xl font-bold capitalize">Aladín - El Deslumbrante Show De Brodway</h1>
                    <div>
                        <p className="text-base font-light text-customGray">
                            Martes, 16 Enero 2023 - 19:00 - 00:00 hrs
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 text-customGray">
                        <MapPinIcon name="location" className="w-5 h-5" />
                        <p className="text-base leading-tight">
                            Centro cultural, Ciudad de México
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
