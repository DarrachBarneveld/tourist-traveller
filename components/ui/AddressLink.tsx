import { Map } from "leaflet";
import React, { useCallback, RefObject } from "react";

interface AddressLinkProps {
  formatted_address: string;
  location: { lat: number; lng: number };
  name: string;
  mapRef: Map;
}

const AddressLink: React.FC<AddressLinkProps> = ({
  formatted_address,
  location,
  mapRef,
}) => {
  const moveToLocationHandler = useCallback(() => {
    if (mapRef) {
      mapRef.flyTo(location, 13);
    }
  }, [location, mapRef]);

  return (
    <address
      className="color-blue-700 font-bold text-sm hover:cursor-pointer hover:underline"
      onClick={moveToLocationHandler}
    >
      {formatted_address}
    </address>
  );
};

export default AddressLink;
