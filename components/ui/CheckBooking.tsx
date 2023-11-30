import React from "react";

const CheckBooking: React.FC<{ address: string }> = ({ address }) => {
  const searchTerm = encodeURIComponent(address);

  return (
    <a
      className="text-slate-50 rounded-md border border-slate-50 bg-blue-500 p-1 h-fit self-end text-sm text-center hover:brightness-90"
      target="_blank"
      href={`https://www.google.com/search?q=booking+${searchTerm}`}
    >
      Check Booking
    </a>
  );
};

export default CheckBooking;
