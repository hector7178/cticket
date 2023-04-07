import { useMemo } from "react";

const libraries = ["places"];
export const useGoogleMapsAPIKey = () => {
    const apiKey = useMemo(() => process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, []);
    return { apiKey };
};
