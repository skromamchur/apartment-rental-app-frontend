import { FormCard } from '@/components/FormCard';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { FlatCard } from '@/components/FlatCard';

export const MapOfAvailableArticles = ({ apartments }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
    region: 'UA',
  });

  const [showCard, setShowCard] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [ap, setAp] = useState(null);

  const mapRef = useRef(null);
  const parentRef = useRef(null);

  const router = useRouter();

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
        className="relative"
        ref={parentRef}
      >
        {showCard && (
          <div
            className="bg-white  absolute z-[1000]"
            style={{
              top: `${top}px`,
            }}
          >
            <FlatCard
              photo={ap.photos.length ? ap.photos[0].filename : ''}
              price={ap.price}
              city={ap.city}
              street={ap.street}
              floorNumber={ap.floorNumber}
              roomsCount={ap.rooms}
              square={ap.square}
              title={ap.title}
              key={ap.id}
              type={ap.type}
              id={ap.id}
              date={ap.createdAt}
            />
          </div>
        )}
        <GoogleMap
          zoom={10}
          mapContainerClassName="map"
          mapContainerStyle={{ width: '100%', height: '600px', margin: 'auto' }}
          ref={mapRef}
          center={{
            lat: 49.8397,
            lng: 24.0297,
          }}
        >
          {apartments.map((ap) => {
            return (
              <MarkerF
                position={{ lat: ap.lat, lng: ap.lng }}
                label={{
                  text: `${ap.price}₴`,
                  className:
                    'bg-white font-medium text-gray-900 px-2 py-1 border border-black relative top-[-32px] rounded-md',
                }}
                onClick={() => {
                  router.push(`/apartment/${ap.id}`);
                }}
                onMouseOver={(ev) => {
                  setAp(ap);
                  setTop(ev.domEvent.clientY - parentRef.current.getBoundingClientRect().top - 350);
                  setShowCard(true);
                }}
                onMouseOut={() => {
                  setShowCard(false);
                }}
              >
                <div>working...</div>
              </MarkerF>
            );
          })}
        </GoogleMap>
      </div>
    </FormCard>
  );
};
