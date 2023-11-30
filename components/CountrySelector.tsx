"use client";

import { FunctionComponent, useContext } from "react";
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import { CountryContext } from "@/context/CountryContext";
import { Map } from "leaflet";

interface CountrySelectorProps {
  mapRef: Map;
}

const CountrySelector: FunctionComponent<CountrySelectorProps> = ({
  mapRef,
}) => {
  const { setCountryDataHandler, setSelectedCountryHandler, selectedCountry } =
    useContext(CountryContext);

  async function fetchCountryData(name: string) {
    const { data } = await axios.get(`
        https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    setCountryDataHandler(data[0]);
    setSelectedCountryHandler(name);

    const location = data[0].latlng;

    if (mapRef) {
      mapRef.flyTo(location, 5);
    }
  }

  return (
    <CountryDropdown value={selectedCountry} onChange={fetchCountryData} />
  );
};

export default CountrySelector;
