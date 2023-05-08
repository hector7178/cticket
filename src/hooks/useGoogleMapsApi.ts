export const useGoogleMapsAPIKey = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    return { apiKey };
};
