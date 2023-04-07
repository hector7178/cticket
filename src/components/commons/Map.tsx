import React, { useEffect, useRef } from 'react';

export type props = {
  className?: string;
  origin: google.maps.LatLngLiteral; // Added `origin` prop
  destination?: google.maps.LatLngLiteral;
  zoom: number;
};

const Map: React.FC<props> = ({ className, origin, destination, zoom }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current as HTMLElement, {
      center: origin,
      zoom,
    });

    // Add marker for origin
    new window.google.maps.Marker({
      position: origin,
      map,
      icon: {
        url: 'https://cdn.discordapp.com/attachments/835521743095463996/1091178026366140446/song-marker.png',
        scaledSize: new google.maps.Size(40, 40), // width and height of the image
        origin: new google.maps.Point(0, 0), // position of the image relative to the marker's location
        anchor: new google.maps.Point(20, 40), // position of the marker's "anchor" relative to the image
      },
    });

    if (destination) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
      });

      directionsService.route(
        {
          origin,
          destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);

            // Add marker for destination
            new window.google.maps.Marker({
              position: destination,
              map,
            });
          } else {
            console.log('Directions request failed due to ' + status);
          }
        }
      );
    }
  }, [origin, zoom, destination]);

  return <div className={className} ref={ref} id="map" />;
};

export default Map;
