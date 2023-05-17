import React from "react";
import { motion } from "framer-motion";
import useStyles from "./Style/loaderStyle";

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  width: ["100%", "100vh"],
  duration: 1,
};

export const Spinner = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.styleContainer}>
      <motion.span
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className={classes.styleSpen}
      />
    </div>
  );
};
