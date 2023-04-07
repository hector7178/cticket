import { useTranslations } from "next-intl";
// Components
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import Map from "@/components/forms/forms/map";
// Helpers
import { FormStyles } from "@/helpers"
import { useGoogleMapsAPIKey } from "@/hooks/useGoogleMapsApi";



export const AddressForm = ({ register, setValue, errors, searchAddress, onPlaceSelected, markerPosition }) => {
    const [autocomplete, setAutocomplete] = useState(null);
    const [librariesLoaded, setLibrariesLoaded] = useState(false);
    const [coords, setCoords] = useState({
        latitude: "",
        longitude: ""
    })

    const { apiKey } = useGoogleMapsAPIKey();


    const tc = useTranslations("Common_Forms");
    const onAutocompleteLoad = (autocompleteInstance) => {
        setAutocomplete(autocompleteInstance);
    };

    const onPlaceChanged = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                console.error("No geometry/location data found for the selected address.");
                return;
            }
            const address = place.formatted_address;
            const latLng = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
            console.log("Selected address: ", address, latLng);
            onPlaceSelected(address, latLng);

            const components = place.address_components;
            const getAddressComponent = (type) => components.find((component) => component.types.includes(type));

            setValue("addressname", getAddressComponent("point_of_interest")?.long_name || getAddressComponent("premise")?.long_name || address);
            setValue("address", (getAddressComponent("street_number")?.long_name || "") + " " + (getAddressComponent("route")?.long_name || ""));

            setValue("address2", getAddressComponent("subpremise")?.long_name || "");
            setValue("city", getAddressComponent("locality")?.long_name || "");
            setValue("state", getAddressComponent("administrative_area_level_1")?.long_name || "");
            setValue("country", getAddressComponent("country")?.long_name || "");
            setValue("pc", getAddressComponent("postal_code")?.long_name || "");
            setValue("latitude", latLng.lat.toString());
            setValue("longitude", latLng.lng.toString());
        }
    };
    const handleLoad = () => {
        setLibrariesLoaded(true);
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey={apiKey}
                libraries={["places"]}
                onLoad={handleLoad}
            >
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <CustomLabel field="addressname" name={tc('field_addressname')} required />
                        <input
                            {...register("addressname")}
                            type="text"
                            name="addressname"
                            id="addressname"
                            autoComplete={tc('auto_addressname')}
                            placeholder={tc('field_addressname')}
                            className={FormStyles('input')}
                        />
                        <CustomError error={errors.addressname?.message} />
                    </div>

                    <div className="col-span-12">
                        <CustomLabel field="searchaddress" name={tc('field_searchaddress')} />
                        <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
                            <input
                                type="text"
                                name="searchaddress"
                                id="searchaddress"
                                autoComplete={tc('auto_searchaddress')}
                                placeholder={tc('field_searchaddress')}
                                className={FormStyles('input')}
                            />
                        </Autocomplete>
                    </div>
                </div>

                <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="relative isolate bg-white py-10">
                        <div className="flex justify-start w-screen">
                            <Map searchAddress={searchAddress} center={{ lat: 22.767649, lng: -102.546273 }} markerPosition={markerPosition} />
                        </div>
                    </div>
                </div>
            </LoadScript>
            <div className="mt-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="address" name={tc('field_address')} required />
                    <input
                        {...register("address")}
                        type="text"
                        name="address"
                        id="address"
                        autoComplete={tc('auto_address')}
                        placeholder={tc('field_address')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="address2" name={tc('field_address2')} />
                    <input
                        {...register("address2")}
                        type="text"
                        name="address2"
                        id="address2"
                        autoComplete={tc('auto_address2')}
                        placeholder={tc('field_address2')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="pc" name={tc('field_pc')} required />
                    <input
                        {...register("pc")}
                        type="text"
                        name="pc"
                        id="pc"
                        autoComplete={tc('auto_pc')}
                        placeholder={tc('field_pc')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="country" name={tc('field_country')} required />
                    <input
                        {...register("country")}
                        type="text"
                        name="country"
                        id="country"
                        autoComplete={tc('auto_country')}
                        placeholder={tc('field_country')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="state" name={tc('field_state')} required />
                    <input
                        {...register("state")}
                        type="text"
                        name="state"
                        id="state"
                        autoComplete={tc('auto_state')}
                        placeholder={tc('field_state')}
                        className={FormStyles('input')}
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
                    <CustomLabel field="city" name={tc('field_city')} required />
                    <input
                        {...register("city")}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete={tc('auto_city')}
                        placeholder={tc('field_city')}
                        className={FormStyles('input')}
                    />
                </div>
            </div>
        </>
    )
} 