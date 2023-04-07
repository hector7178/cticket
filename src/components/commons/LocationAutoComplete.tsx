import React, { useEffect } from 'react';

type props = {
  onChange: any;
  inputRef: React.RefObject<HTMLInputElement>;
};
const LocationAutocomplete: React.FC<props> = ({ onChange, inputRef }) => {
  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ['geocode'],
      }
    );

    window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const predict = autocomplete.getPlace();
      onChange(predict.geometry.location as any);
    });
  }, []);

  return <></>;
};

export default LocationAutocomplete;
