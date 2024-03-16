//@ts-nocheck

import { FormCard } from '@/components/FormCard';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { FlatCard } from '@/components/FlatCard';

const GoogleMapElement = React.memo(
  ({ apartments, setShowCard, setTop, setLeft, setApartment }) => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      region: 'UA',
      libraries: ['places'],
    });

    const mapRef = useRef(null);
    const parentRef = useRef(null);

    const router = useRouter();
    if (isLoaded) {
      return (
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
          <GoogleMap
            zoom={6}
            mapContainerClassName="map"
            mapContainerStyle={{ width: '100%', height: '600px', margin: 'auto' }}
            ref={mapRef}
            center={{
              lat: 51.8397,
              lng: 23.0297,
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
                    setApartment(ap);
                    setTop(
                      ev.domEvent.clientY - parentRef.current.getBoundingClientRect().top - 350,
                    );
                    setLeft(
                      ev.domEvent.clientX - parentRef.current.getBoundingClientRect().left - 70,
                    );
                    setShowCard(true);
                  }}
                  onMouseOut={() => {
                    setShowCard(false);
                  }}
                ></MarkerF>
              );
            })}
          </GoogleMap>
        </div>
      );
    }
  },
);

export const MapOfAvailableArticles = ({ apartments }) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [ap, setAp] = useState(null);

  return (
    <FormCard className="w-full max-w-[1280px] mx-auto relative">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Location</h3>
      {showCard && (
        <div
          className="bg-white  absolute z-[1000]"
          style={{
            top: `${top}px`,
            left: `${left}px`,
          }}
        >
          <FlatCard
            photo={ap.photos.length ? ap.photos[0] : ''}
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
            wrapperClassName="w-[305px]"
          />
        </div>
      )}

      <GoogleMapElement
        apartments={apartments}
        setShowCard={setShowCard}
        setApartment={setAp}
        setTop={setTop}
        setLeft={setLeft}
      />
    </FormCard>
  );
};
