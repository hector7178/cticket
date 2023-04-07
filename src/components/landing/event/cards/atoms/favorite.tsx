
// Icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/20/solid";

export const Favorite = () => {
    return (
        <div className="absolute top-0 right-0 m-3 flex h-10 w-10 items-center justify-center rounded-full bg-white drop-shadow-xl">
            <HeartIcon name="favoriteD" className="w-6 h-6" />
            {/* <HeartSolid name="favoriteE" className="w-6 h-6 text-customYellow" /> */}
        </div>
    )
}