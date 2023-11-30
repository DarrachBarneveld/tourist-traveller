"use client";

import { FunctionComponent, useContext } from "react";
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import { Map as LeafletMap } from "leaflet";
import { CountryContext } from "@/context/CountryContext";

interface CountrySelectorProps {
  mapRef: LeafletMap;
}

const CountrySelector: FunctionComponent<CountrySelectorProps> = ({
  mapRef,
}) => {
  const { setCountryDataHandler, setSelectedCountryHandler, selectedCountry } =
    useContext(CountryContext);

  async function fetchCountryData(name: string) {
    const { data } = await axios.get(`
        https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    setCountryDataHandler(...data);
    setSelectedCountryHandler(name);

    const location = data[0].latlng;

    mapRef.flyTo(location, 5);
  }

  return (
    <CountryDropdown
      value={selectedCountry}
      className="p-1 w-6/12 text-lg font-bold text-sky-950 border hover:border-blue-500 hover:cursor-pointer rounded-md border-slate-400 w-100"
      onChange={fetchCountryData}
    />
  );
};

export default CountrySelector;
