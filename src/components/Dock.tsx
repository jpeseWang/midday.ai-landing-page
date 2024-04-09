/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const dockIcons = [
  {
    key: 1,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffinder.5d3bc19b.png&w=128&q=100",
  },
  {
    key: 2,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmidday.cd14fad9.png&w=128&q=100",
  },
  {
    key: 3,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcal.37da85fd.png&w=128&q=100",
  },
  {
    key: 4,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotion.6d20681d.png&w=128&q=100",
  },
  {
    key: 5,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.696c82c0.png&w=128&q=100",
  },
  {
    key: 6,
    url: "https://midday.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.4d8ce705.png&w=128&q=100",
  },
];

export default function Dock() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (index: any) => {
    setHoveredButton(index);
  };

  return (
    <motion.div
      className="mx-auto max-w-[300px] flex h-[58px] items-end gap-2 rounded-2xl px-2 pb-2 border dark:border-[#707070]"
      whileHover={{ scale: 1.1, opacity: 1 }}
    >
      {dockIcons.map((item) => (
        <button
          key={item.key}
          onMouseEnter={() => handleHover(item.key)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <motion.div
            animate={{
              scale:
                hoveredButton === item.key
                  ? 1.375
                  : hoveredButton === item.key - 1 ||
                    hoveredButton === item.key + 1
                  ? 1.2
                  : 1,
              y: hoveredButton === item.key ? [-3, 0] : 0,
            }}
          >
            <span className="sr-only">Finder</span>
            <img
              src={item.url}
              className="aspect-square rounded-lg h-[40px] w-[40px] hover:scale-x transform transition duration-y"
              alt=""
            />
          </motion.div>
        </button>
      ))}
    </motion.div>
  );
}
