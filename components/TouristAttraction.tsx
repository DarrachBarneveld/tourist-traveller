import React from "react";
import AddressLink from "./ui/AddressLink";
import { FaHeart } from "react-icons/fa";
import RatingsBar from "./ui/RatingsBar";
import { Map } from "leaflet";

interface TouristAttractionProps {
  recommendation: {
    name: string;
    photos: { photo_reference: string }[];
    rating: number;
    formatted_address: string;
    user_ratings_total: number;
    geometry: { location: { lat: number; lng: number } };
  };
  mapRef: Map;
}

const TouristAttraction: React.FC<TouristAttractionProps> = ({
  recommendation,
  mapRef,
}) => {
  const {
    name,
    photos,
    rating,
    formatted_address,
    user_ratings_total,
    geometry: { location },
  } = recommendation;

  const photoRef = photos[0]?.photo_reference;

  return (
    <div className="flex gap-1 p-1 bg-slate-100 rounded-sm shadow-sm min-w-[500px] justify-between">
      <div className="w-[175px] aspect-square overflow-hidden rounded-sm border-slate-500 border relative">
        <img
          className="w-100 object-cover aspect-square"
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.NEXT_PUBLIC_API_KEY}`}
          alt="Tourist Attraction"
        />
        <FaHeart className="color-red-500" />
      </div>

      <div className="flex text-sky-900 flex-col flex-1 gap-1">
        <div className="flex justify-between gap-2">
          <h3 className="font-extrabold text-slate-800 border-b border-slate-800">
            {name}
          </h3>
          <RatingsBar rating={rating} />
        </div>
        <p className="text-sm font-extrabold">
          Rating: {rating} /{" "}
          <span className="text-sm font-bold">
            <i className="fa-regular fa-user"></i>
            {user_ratings_total}
          </span>
        </p>
        <AddressLink
          formatted_address={formatted_address}
          location={location}
          name={name}
          mapRef={mapRef}
        />

        <div className="flex self-end gap-1 mt-1">
          {/* <CheckFlights />
          <CheckBooking /> */}
        </div>
      </div>
    </div>
  );
};

export default TouristAttraction;
