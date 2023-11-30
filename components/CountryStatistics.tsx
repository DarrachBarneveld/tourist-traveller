import { motion } from "framer-motion";
import { useContext } from "react";

import Languages from "./Languages";
import { CountryContext } from "@/context/CountryContext";
import Statistic from "./ui/Statistic";
import { numberWithCommas } from "@/lib/helpers";
import BorderingCountries from "./BorderingCountries";

const CountryStatistics: React.FC = () => {
  const countryCtx = useContext(CountryContext);

  const { countryData } = countryCtx;
  if (Object.keys(countryData).length === 0) {
    return <h1>Loading</h1>;
  }

  const { name, population, region, capital, borders, languages, flags } =
    countryCtx.countryData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  };

  if (!languages) return;

  const languageArray = Object.values(languages);

  return (
    <div className="p-1">
      <div className="flex flex-col text-slate-800 text-xl gap-1 item-center">
        <motion.div
          key={name.common}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          initial={{ opacity: 0, x: 25, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-[400px] min-w-[125px] w-8/12 mx-auto "
        >
          <img
            className="rounded-lg shadow-lg w-100 border border-slate-800"
            src={flags?.svg}
            alt="My SVG Image"
          />
        </motion.div>
        <motion.div
          className="flex flex-col"
          variants={container}
          initial="hidden"
          animate="show"
          key={population}
        >
          <motion.div variants={child}>
            <Statistic text={name?.common} title="Country" />
          </motion.div>
          <motion.div variants={child}>
            <Statistic title="Population" text={numberWithCommas(population)} />
          </motion.div>
          <motion.div variants={child}>
            <Statistic title="Region" text={region} />
          </motion.div>
          <motion.div variants={child}>
            <Languages languages={languageArray} />
          </motion.div>
        </motion.div>
      </div>
      <BorderingCountries borders={borders} />
    </div>
  );
};

export default CountryStatistics;
