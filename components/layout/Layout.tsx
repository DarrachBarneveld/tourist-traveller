import { useState } from "react";

import NavBar from "./Navbar";
import CountryStatistics from "../CountryStatistics";
import Recommendations from "../Recommendations";
import { Map } from "leaflet";

interface LayoutProps {
  mapRef: Map | undefined;
}

const Layout: React.FC<LayoutProps> = ({ mapRef }) => {
  const [view, setView] = useState(true);

  if (!mapRef) return;

  return (
    <div className="">
      <NavBar mapRef={mapRef} setView={setView} />
      <div className="flex items-center justify-center p-2">
        {view ? <CountryStatistics /> : <Recommendations mapRef={mapRef} />}
      </div>
    </div>
  );
};

export default Layout;
