import React, { useContext } from "react";
import { motion } from "framer-motion";

import TouristAttraction from "./TouristAttraction";
import { PlacesContext } from "@/context/PlacesContext";
import { Map } from "leaflet";

interface RecommendationsProps {
  mapRef: Map;
}

const Recommendations: React.FC<RecommendationsProps> = ({ mapRef }) => {
  const placesCtx = useContext(PlacesContext);

  const { recommendedPlaces, updatedRecommendation } = placesCtx;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col gap-1">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={"test"}
        className="flex flex-col gap-1"
      >
        {recommendedPlaces.length > 0 ? (
          <>
            {recommendedPlaces.map((place: any, i: number) => (
              <motion.div
                className="border rounded-sm border-slate-300"
                variants={child}
                key={i}
              >
                <TouristAttraction recommendation={place} mapRef={mapRef} />
              </motion.div>
            ))}
          </>
        ) : (
          <h1>Search LOL</h1>
        )}
      </motion.div>
    </div>
  );
};

export default Recommendations;
