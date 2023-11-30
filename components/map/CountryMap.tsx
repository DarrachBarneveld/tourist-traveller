"use client";

import { FunctionComponent, useContext, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Map as LeafletMap, Map } from "leaflet";
import { CountryContext } from "@/context/CountryContext";
import CustomMarker, { redMarker } from "../ui/CustomMarker";
import { PlacesContext } from "@/context/PlacesContext";

interface CountryMapProps {
  zoom: number;
  setMapRef: (ref: Map) => void;
  mapRef: Map | undefined;
}

const CountryMap: FunctionComponent<CountryMapProps> = ({
  zoom,
  setMapRef,
  mapRef,
}) => {
  const { countryData } = useContext(CountryContext);
  const { recommendedPlaces } = useContext(PlacesContext);

  const coords = countryData?.latlng;

  function CountryMarker() {
    if (Object.keys(countryData).length === 0) return;

    return (
      <Marker position={coords} icon={redMarker}>
        <Popup>
          {countryData?.name?.common}
          <br />
        </Popup>
      </Marker>
    );
  }

  function RecommendationMarkers() {
    const map = useMap();

    console.log("fire");
    return (
      recommendedPlaces.length > 0 &&
      recommendedPlaces.map((place, index) => {
        return (
          <CustomMarker
            key={index}
            locationFly={() => map.flyTo(place.geometry.location, 12)}
            marker={place}
          />
        );
      })
    );
  }

  console.log(recommendedPlaces);

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
        <CountryMarker />
        <RecommendationMarkers />
      </MapContainer>
    ),
    [, coords, recommendedPlaces]
  );

  return <div>{displayMap}</div>;
};

export default CountryMap;
