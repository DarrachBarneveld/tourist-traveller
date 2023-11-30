"use-client";

import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { Map as LeafletMap } from "leaflet";

interface CountryContextProps {
  countryData: any;
  selectedCountry: string;
  map: LeafletMap | undefined;
  setCountryDataHandler: (data: any) => void;
  setSelectedCountryHandler: (name: string) => void;
  setMapHandler: (map: LeafletMap | undefined) => void;
}

export const CountryContext = createContext<CountryContextProps>({
  countryData: {},
  selectedCountry: "",
  map: undefined,
  setCountryDataHandler: () => {},
  setSelectedCountryHandler: () => {},
  setMapHandler: () => {},
});

interface CountryContextProviderProps {
  children: ReactNode;
}

const CountryContextProvider: React.FC<CountryContextProviderProps> = ({
  children,
}) => {
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState<string>("Ireland");
  const [map, setMap] = useState<LeafletMap | undefined>(undefined);

  useEffect(() => {
    async function fetchInitialCountry() {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/ireland`
      );

      setCountryData(data[0]);
    }

    fetchInitialCountry();
  }, []);

  function setMapHandler(map: LeafletMap | undefined) {
    setMap(map);
  }

  function setCountryDataHandler(data: any) {
    setCountryData(data);
  }

  function setSelectedCountryHandler(name: string) {
    setSelectedCountry(name);
  }

  const value: CountryContextProps = {
    countryData,
    setCountryDataHandler,
    setSelectedCountryHandler,
    selectedCountry,
    map,
    setMapHandler,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
