import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { useFormContext, useController } from 'react-hook-form';

export const GoogleMapInput = () => {
  const { control } = useFormContext();

  const { field } = useController({
    name: 'locationId',
    control,
    rules: { required: true },
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const handlePlaceSelect = async (place) => {
    if (place) {
      console.log(place.place_id);
      field.onChange(place.place_id);
      setSelectedPlace(place);
      setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    }
  };

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Autocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onPlaceSelected={handlePlaceSelect}
        style={{ width: '1000px' }}
        options={{
          types: ['route'],
          componentRestrictions: { country: 'UA' },
        }}
      />

      <GoogleMap
        zoom={16}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: '80%', height: '600px', margin: 'auto' }}
      >
        {selectedPlace && (
          <Marker
            position={{
              lat: selectedPlace.geometry.location.lat(),
              lng: selectedPlace.geometry.location.lng(),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};
