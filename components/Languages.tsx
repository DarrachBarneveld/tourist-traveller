import React from "react";

interface LanguagesProps {
  languages: any[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <ul className="flex flex-col list-none wrap gap-1 shadow-sm">
      <span className="text-sm">Languages</span>
      {languages?.map((lng, i) => (
        <li className="p-1 bg-slate-100 shadow-sm text-base" key={i}>
          {lng}
        </li>
      ))}
    </ul>
  );
};

export default Languages;
