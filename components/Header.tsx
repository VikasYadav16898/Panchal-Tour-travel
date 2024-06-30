import React from "react";
import Image from "next/image";
import logo from "@/public/images/logoFinal.png";

const Header = () => {
  const goToEl = (id: string) => {
    const elm = document.getElementById(id);
    if (elm) {
      elm.scrollIntoView({
        behavior: "smooth", // Optional: smooth scrolling behavior
        block: "start", // Scroll to the top of the element
        inline: "start",
      });
    }
  };

  return (
    <div className="h-[10vh] sticky top-0 z-50 p-8 w-screen bg-primary flex justify-center md:justify-between items-center">
      {/* <img className="w-5 aspect-square" src={logo} /> */}
      <Image
        src="/images/logoFinal.png"
        alt="Vercel Logo"
        className="w-16 aspect-square"
        width={100}
        height={100}
        priority
      />

      <div className="hidden md:flex items-center gap-8">
        <p
          className="cursor-pointer transition-all hover:scale-110"
          onClick={() => {
            goToEl("home");
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer transition-all hover:scale-110"
          onClick={() => {
            goToEl("about-us");
          }}
        >
          About Us
        </p>

        <a
          href="https://wa.me/919813675037/?text=Hello, I would like to book a taxi."
          target="_blank"
          className="cursor-pointer transition-all hover:scale-110"
        >
          Contact Us
        </a>
        <p
          className="cursor-pointer transition-all hover:scale-110"
          onClick={() => {
            goToEl("testimonials");
          }}
        >
          Testimonials
        </p>
      </div>
    </div>
  );
};

export default Header;
