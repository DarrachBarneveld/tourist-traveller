import React, { FunctionComponent, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  color: string;
  text: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  onClick,
  color,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl cursor-pointer bg-white flex flex-col p-2 justify-center items-center rounded-lg shadow-sm border-slate-400 border hover:bg-blue-200 focus:bg-blue-200"
      style={{ color }}
    >
      {icon}
      <span className="text-slate-800 text-sm">{text}</span>
    </button>
  );
};

export default IconButton;
