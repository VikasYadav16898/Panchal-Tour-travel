import React from "react";
import Image from "next/image";
import logo from "@/public/images/logoFinal.png";

const Footer = () => {
  return (
    <div className="h-[10vh] mt-[10vh] z-50 p-8 w-screen bg-primary flex justify-center  items-center">
      {/* <img className="w-5 aspect-square" src={logo} /> */}

      <div className="flex items-center justify-center text-center gap-8">
        All © Reserved by Panghal Tours & Travels
      </div>
    </div>
  );
};

export default Footer;
