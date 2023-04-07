const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined" || typeof window.google === "undefined") {
            reject(new Error("Google Maps API is not available."));
            return;
        }

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === "OK") {
                const latLng = results[0].geometry.location;
                resolve({ lat: latLng.lat(), lng: latLng.lng() });
            } else {
                reject(new Error(`Geocoding failed with status: ${status}`));
            }
        });
    });
};

export { geocodeAddress };
