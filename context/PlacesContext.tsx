import React, { createContext, ReactNode, useState } from "react";

interface PlacesContextProps {
  recommendedPlaces: any[];
  updatedRecommendation: boolean;
  setRecommendedPlacesHandler: (places: any[]) => void;
  updatedRecommendationHandler: (boolean: boolean) => void;
}

export const PlacesContext = createContext<PlacesContextProps>({
  recommendedPlaces: [],
  updatedRecommendation: false,
  setRecommendedPlacesHandler: () => {},
  updatedRecommendationHandler: () => {},
});

interface PlacesContextProviderProps {
  children: ReactNode;
}

const PlacesContextProvider: React.FC<PlacesContextProviderProps> = ({
  children,
}) => {
  const [recommendedPlaces, setRecommendedPlaces] = useState<any[]>([]); // Replace 'any' with the actual type of your recommendedPlaces
  const [updatedRecommendation, setUpdatedRecommendations] =
    useState<boolean>(false);

  function setRecommendedPlacesHandler(places: any[]) {
    setRecommendedPlaces(places);
  }

  function updatedRecommendationHandler(boolean: boolean) {
    setUpdatedRecommendations(boolean);
  }

  const value: PlacesContextProps = {
    recommendedPlaces,
    setRecommendedPlacesHandler,
    updatedRecommendation,
    updatedRecommendationHandler,
  };

  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
