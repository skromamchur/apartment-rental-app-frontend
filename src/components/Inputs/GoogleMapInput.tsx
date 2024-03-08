import { GoogleMap, Marker, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useRef, useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { useFormContext, useController } from 'react-hook-form';
import { getPlaceDetails } from '@/api/maps';

export const GoogleMapInput = () => {
  const { control } = useFormContext();

  const InputRef = useRef();

  const { field } = useController({
    name: 'locationId',
    control,
    rules: { required: true },
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
    region: 'UA',
  });

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState({
    lat: 49.8397,
    lng: 24.0297,
  });

  const handlePlaceSelect = async (place) => {
    if (place) {
      console.log(place.place_id);
      field.onChange(place.place_id);
      setSelectedPlace(place);
      setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
    }
  };

  const handleMapClick = async (event) => {
    // Отримати координати місця, на яке клікнуто
    const clickedPlace = {
      geometry: {
        location: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        },
      },
    };

    console.log({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });

    console.log(
      await getPlaceDetails({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }),
    );

    const foundedPlace = await getPlaceDetails({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });

    InputRef.current.value = foundedPlace.result;

    // // Оновити стан та викликати функцію для обробки вибору місця
    setSelectedPlace(foundedPlace.geometry);

    console.log(foundedPlace);
    console.log(foundedPlace.geometry.place_id);

    field.onChange(foundedPlace.geometry.place_id);
  };

  if (!isLoaded) return <div>Loading....</div>;

  const getLat = () => {
    if (typeof selectedPlace.geometry.location.lat === 'function') {
      return selectedPlace.geometry.location.lat();
    } else {
      return selectedPlace.geometry.location.lat;
    }
  };

  const getLng = () => {
    if (typeof selectedPlace.geometry.location.lng === 'function') {
      return selectedPlace.geometry.location.lng();
    } else {
      return selectedPlace.geometry.location.lng;
    }
  };

  return (
    <div
      className="mt-4"
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
        style={{ width: '100%' }}
        options={{
          types: ['route'],
          componentRestrictions: { country: 'UA' },
        }}
        ref={InputRef}
        className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      />

      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: '100%', height: '600px', margin: 'auto' }}
        onClick={handleMapClick}
      >
        {selectedPlace && (
          <MarkerF
            position={{
              lat: getLat(),
              lng: getLng(),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};
