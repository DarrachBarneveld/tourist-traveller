import { useContext, useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { CountryContext } from "@/context/CountryContext";

async function fetchBorderingCountries(borders: any[]) {
  const allBorderingFetch = borders.map(async (country) => {
    const { data } = await axios(
      `https://restcountries.com/v3.1/alpha/${country}`
    );

    return data[0];
  });

  const bordering = await Promise.all(allBorderingFetch);

  return bordering;
}

interface BorderingCountriesProps {
  borders: string[];
}

const BorderingCountries: FC<BorderingCountriesProps> = ({ borders }) => {
  const { setCountryDataHandler, setSelectedCountryHandler } =
    useContext(CountryContext);
  const [borderingCountries, setBorderingCountries] = useState<any[]>();

  useEffect(() => {
    async function fetchCountriesBordering() {
      if (!borders) return;

      const data = await fetchBorderingCountries(borders);

      setBorderingCountries(data);
    }

    fetchCountriesBordering();
  }, [borders]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  async function fetchCountryData(name: string) {
    const { data } = await axios.get(`
    https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    setCountryDataHandler(data[0]);
    setSelectedCountryHandler(name);
  }

  return (
    <div>
      <span className="text-base">Borders</span>
      <motion.div
        className="w-fit flex justify-center items-center wrap gap-1"
        variants={container}
        initial="hidden"
        animate="show"
        key={borders ? borders.join(",") : "loading"}
      >
        {borderingCountries?.map((country, i) => {
          return (
            <motion.div
              key={i}
              variants={child}
              className="flex flex-col justify-center items-center flex-1 bg-slate-200 rounded-md relative max-w-fit group"
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => fetchCountryData(country.name.common)}
            >
              <img
                src={country.flags.svg}
                className="rounded-md max-w-[100px] min-w-[50px]"
                alt={`${country.name.common} flag`}
              />
              <span className="w-fit bg-neutral-900 text-white p-1 absolute z-10 -bottom-5 mx-auto opacity-0 transition-opacity duration-300 text-sm group-hover:opacity-100 rounded-md">
                {country.name.common}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BorderingCountries;
