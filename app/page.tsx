"use client";

import { RefObject, useState } from "react";
import { Map as LeafletMap, Map } from "leaflet";
import CountryMap from "@/components/map";
import Layout from "@/components/layout/Layout";
import CountryContextProvider from "@/context/CountryContext";
import PlacesContextProvider from "@/context/PlacesContext";

function App() {
  const [mapRef, setMapRef] = useState<LeafletMap | undefined>(undefined);

  return (
    <PlacesContextProvider>
      <CountryContextProvider>
        <main className="grid grid-cols-2 min-h-screen min-w-full bg-neutral-200">
          <CountryMap zoom={7} setMapRef={setMapRef} mapRef={mapRef} />
          <Layout mapRef={mapRef} />
        </main>
      </CountryContextProvider>
    </PlacesContextProvider>
  );
}

export default App;
