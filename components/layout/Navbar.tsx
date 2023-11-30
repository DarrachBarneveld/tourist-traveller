"use client";

import axios from "axios";
import CountrySelector from "../CountrySelector";
import { FaHeart, FaFlag } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import IconButton from "../ui/IconButton";
import { PlacesContext } from "@/context/PlacesContext";
import { CountryContext } from "@/context/CountryContext";
import { useContext } from "react";
import { Map } from "leaflet";

interface NavBarProps {
  mapRef: Map;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ mapRef, setView }) => {
  const countryCtx = useContext(CountryContext);
  const placesCtx = useContext(PlacesContext);

  async function fetchGoogleAPIHandler() {
    try {
      const { data } = await axios.post("/api");

      placesCtx.updatedRecommendationHandler(!placesCtx.updatedRecommendation);

      placesCtx.setRecommendedPlacesHandler(data);
      setView(false);
    } catch (error) {
      console.error("Error fetching Google API:", error);
    }
  }

  return (
    <header className="flex gap-2 bg-slate-200 shadow-md p-2 m-2 rounded-sm justify-between">
      <CountrySelector mapRef={mapRef} />
      <div className="flex justify-evenly w-100 gap-2">
        <IconButton
          icon={<FaFlag />}
          color="blue"
          onClick={() => setView(true)}
          text="Country"
        />
        <IconButton
          onClick={fetchGoogleAPIHandler}
          icon={<FaEarthEurope />}
          color="green"
          text="Places"
        />
        <IconButton
          icon={<FaHeart />}
          color="red"
          onClick={() => {}}
          text="Favourites"
        />
      </div>
    </header>
  );
};

export default NavBar;
