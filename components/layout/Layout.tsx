import { useState } from "react";

import NavBar from "./Navbar";
import { MapRefType } from "@/lib/types";
import CountryStatistics from "../CountryStatistics";
import Recommendations from "../Recommendations";

const Layout: React.FC<MapRefType> = ({ mapRef }) => {
  const [view, setView] = useState(true);

  return (
    <div className="">
      <NavBar mapRef={mapRef} setView={setView} />
      <div className="flex items-center justify-center p-2">
        {view ? <CountryStatistics /> : <Recommendations mapRef={mapRef} />}
      </div>

      {/* <AnimatePresence mode="wait">
          {view ? (
            <motion.div
              key="countryStatistics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            </motion.div>
          ) : (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Recommendations mapRef={mapRef} />
            </motion.div>
          )}
        </AnimatePresence> */}
    </div>
  );
};

export default Layout;
