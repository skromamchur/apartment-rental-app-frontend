import { FormCard } from '@/components/FormCard';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import React, { useRef } from 'react';

export const ApartmentPageLocationInformation = ({ lng, lat }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const mapRef = useRef(null);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Location</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <GoogleMap
          zoom={16}
          center={{ lat, lng }}
          mapContainerClassName="map"
          mapContainerStyle={{ width: '100%', height: '600px', margin: 'auto' }}
          ref={mapRef}
        >
          <MarkerF position={{ lat, lng }} />
        </GoogleMap>
      </div>
    </FormCard>
  );
};
