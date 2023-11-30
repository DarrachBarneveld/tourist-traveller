import React from "react";
import { motion } from "framer-motion";

import { ratingRounder } from "@/lib/helpers";

interface RatingsBarProps {
  rating: number;
}

const RatingsBar: React.FC<RatingsBarProps> = ({ rating }) => {
  const roundedRating = ratingRounder(rating);
  const ratingArray = Array.from(Array(roundedRating).keys());
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: { scale: 0, y: 75 },
    show: { scale: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-[100px] h-[20px] rounded-lg gap-[1px] bg-sky-600 p-[2px] flex"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {ratingArray.map((star, index) => (
        <motion.div
          key={index}
          className="w-[19px] rounded-full bg-green-400"
          variants={child}
        />
      ))}
    </motion.div>
  );
};

export default RatingsBar;
