import React, { useContext } from "react";

import { CountryContext } from "@/context/CountryContext";

const CheckFlights: React.FC = () => {
  const countryCtx = useContext(CountryContext);

  const { selectedCountry } = countryCtx;

  return (
    <a
      className="text-slate-50 rounded-md border border-slate-50 bg-emerald-500 p-1 h-fit self-end text-sm text-center hover:brightness-90"
      target="_blank"
      href={`https://www.google.com/search?q=flights+${selectedCountry}`}
    >
      Check Flights
    </a>
  );
};

export default CheckFlights;
