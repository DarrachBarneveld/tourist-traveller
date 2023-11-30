import dynamic from "next/dynamic";

const CountryMap = dynamic(() => import("./CountryMap"), {
  ssr: false,
});

export default CountryMap;
