import React from "react";

interface StatisticProps {
  text: string;
  title: string;
}

const Statistic: React.FC<StatisticProps> = ({ text, title }) => {
  return (
    <div>
      <span className="text-sm">{title}</span>
      <p className="p-1 bg-slate-100 shadow-sm text-base">{text}</p>
    </div>
  );
};

export default Statistic;
