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

  console.log(mapRef);

  return (
    <CountryDropdown value={selectedCountry} onChange={fetchCountryData} />
  );
};

export default CountrySelector;

// className="p-1 w-6/12 text-lg font-bold text-sky-950 border hover:border-blue-500 hover:cursor-pointer rounded-md border-slate-400 w-100"
