import React from "react";
import { motion } from "framer-motion";

const Cake = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        style={{
          width: "200px",
          height: "150px",
          margin: "0 auto",
          backgroundColor: "#ffcccb",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30px",
            height: "50px",
            backgroundColor: "#f08080",
            borderRadius: "5px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-45px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "10px",
            height: "15px",
            backgroundColor: "#ffff00",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Cake;
