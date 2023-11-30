"use client";

import { FunctionComponent, useContext, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import { CountryContext } from "@/context/CountryContext";

interface CountryMapProps {
  zoom: number;
  setMapRef: (ref: React.RefObject<LeafletMap> | null) => void;
  mapRef: React.RefObject<LeafletMap> | null;
}

const CountryMap: FunctionComponent<CountryMapProps> = ({
  zoom,
  setMapRef,
  mapRef,
}) => {
  const { countryData } = useContext(CountryContext);
  const coords = countryData?.latlng;

  const displayMap = useMemo(
    () => (
      <MapContainer
        className="w-100 rounded-lg min-w-[500px] h-[90vh] border-b-2"
        center={[54, -2]}
        zoom={7}
        scrollWheelZoom={false}
        ref={setMapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [, coords]
  );

  return <div>{displayMap}</div>;
};

export default CountryMap;
