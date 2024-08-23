import React from "react";
import { uuid } from "uuidv4";

const Footer = () => {
  return (
    <footer className="footer">
      <span
        style={{
          textAlign: "center",
        }}
        className="text-light text-md"
      >
        Copyright Rangga Arsy Prawira @2024 || All Right Reserved
        {" " +uuid()}
      </span>
    </footer>
  );
};

export default Footer;
