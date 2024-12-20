import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "./image.png";

const Surprise = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {show ? "Hide Surprise" : "Show Surprise"}
      </button>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "20px", fontSize: "1.5rem", color: "#ff69b4" }}
        >
          <img
            src={image} // Replace with your image URL
            alt="Funny Surprise"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Surprise;
