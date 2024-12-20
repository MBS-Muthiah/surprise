import React from "react";
import { motion } from "framer-motion";

const Greeting = () => {
  const name = "USHA"; // Set the name directly here

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <motion.h1
        style={{ fontSize: "2.5rem", color: "#ff69b4" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {`Happy Birthday, ${name}! 🎉`}
      </motion.h1>
    </div>
  );
};

export default Greeting;
