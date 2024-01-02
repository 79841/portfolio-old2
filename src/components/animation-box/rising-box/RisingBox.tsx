"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type TRisingBoxProps = PropsWithChildren;
export const RisingBox = ({ children }: TRisingBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rising-box opacity-0"
    >
      {children}
    </motion.div>
  );
};
