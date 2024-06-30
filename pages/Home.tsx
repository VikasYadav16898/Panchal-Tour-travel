"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Marquee from "@/components/magicui/marquee";
import Meteors from "@/components/magicui/meteors";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import WordRotate from "@/components/magicui/word-rotate";
import { TESTIMONAILS, VEHICLES } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import Particles from "@/components/magicui/particles";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: -10,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const cardVariants2: Variants = {
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: {
      opacity: 1,
      y: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="font-mono bg-black text-white">
      <Header />
      <div className="relative  md:mt-0 mt-8 flex flex-col gap-20 md:overflow-hidden p-8 w-screen overflow-x-hidden items-center ">
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={800}
          color={"#ffffff"}
          refresh
        />
        <div id="home" className="w-full h-[90vh] gap-16 flex items-center">
          {/* <Meteors number={500} /> */}
          <div className=" w-full md:w-1/2 gap-4 flex flex-col ">
            {/* <AnimatedGradientText> */}
            <h1
              className={cn(
                `inline animate-gradient md:text-6xl text-4xl font-extrabold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Panghal Tour & Travels
            </h1>
            <WordRotate
              className="text-4xl font-bold text-white dark:text-white"
              words={[
                "Corporate Taxi",
                "Personal Taxi",
                "Long Distance Tour",
                "Family Tour",
                "Book Now",
                "One Call Away",
              ]}
            />
            {/* </AnimatedGradientText> */}
            <h4 className="text-lg">
              {
                "Choose from a diverse fleet of well-maintained vehicles including Kia Carens, Fronx, Maruti Desire, Ertiga, Innova, and many more. Serving customers since 2007, we pride ourselves on providing exceptional service around the clock, 24/7. Whether you're planning a short trip or a long journey, Panghal Tour and Travels is your go-to choice for safe, punctual, and pleasant rides."
              }
            </h4>
            <div className="flex items-center gap-8 cursor-pointer justify-center mt-4">
              <a
                className="hover:scale-105 transition-transform"
                href="https://www.facebook.com/panghaltravel/"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-16"
                  src="/images/facebook.svg"
                  alt="facebook"
                />
              </a>

              <a
                className="hover:scale-105 transition-transform"
                href="https://wa.me/919813675037/?text=Hello, I would like to book a taxi."
              >
                <Image
                  width={100}
                  height={100}
                  className="w-16"
                  src="/images/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
              <a
                className="hover:scale-105 transition-transform"
                href="tel:+919813675037"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-16"
                  src="/images/call1.svg"
                  alt="call"
                />
              </a>
            </div>
          </div>
          <div className=" hidden md:flex w-1/2 ">
            <NeonGradientCard className="w-full bg-primary items-center justify-center text-center">
              <Image
                width={100}
                height={100}
                className="w-full h-full"
                src="/images/driver.svg"
                alt="taxi"
              />
            </NeonGradientCard>
          </div>
        </div>

        {/* About us */}
        <section
          id="about-us"
          className="w-full  gap-16 flex flex-col items-center"
        >
          {/* <Meteors number={500} /> */}
          <div className="w-full  flex justify-center items-center gap-8 flex-col ">
            {/* <AnimatedGradientText> */}
            <h1
              className={cn(
                `inline animate-gradient md:text-6xl text-4xl font-extrabold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              About Us
            </h1>
            {/* </AnimatedGradientText> */}
            <h4 className="text-lg text-left md:text-center">
              {
                "Panghal Tour and Travels** invites you to experience top-notch taxi services with our diverse fleet of well-maintained vehicles, including Kia Carens, Fronx, Maruti Desire, Ertiga, Innova, and many more. Since 2007, we have been dedicated to providing exceptional service to our valued customers around the clock, 24/7. Our commitment to your satisfaction is evident in our punctuality, safety standards, and the comfort of our rides. Whether you're planning a short trip across town or a long journey out of the city, Panghal Tour and Travels is your trusted partner. Our professional drivers are courteous and knowledgeable, ensuring that your travel experience is smooth and enjoyable. Choose Panghal Tour and Travels for a seamless travel experience that caters to your needs. With our reliable and friendly service, we strive to exceed your expectations every time you ride with us."
              }
            </h4>
          </div>

          <div
            className="relative flex w-full max-w-[700px] items-center justify-center overflow-hidden  p-10"
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
              <div className="flex flex-row items-center justify-between">
                <div ref={div1Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
                <div ref={div5Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div ref={div2Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
                <div ref={div4Ref} className="w-40">
                  <Image
                    width={100}
                    height={100}
                    className="w-full"
                    src="/images/logoFinal.png"
                    alt="user"
                  />
                </div>
                <div ref={div6Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div ref={div3Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
                <div ref={div7Ref}>
                  <Image
                    width={100}
                    height={100}
                    className="w-16"
                    src="/images/user.svg"
                    alt="user"
                  />
                </div>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
              reverse
            />
          </div>
        </section>

        {/* Our cars */}
        <section className="w-full  gap-16 flex flex-col items-center">
          {/* <Meteors number={500} /> */}
          <div className="w-full  flex justify-center items-center gap-8 flex-col ">
            {/* <AnimatedGradientText> */}
            <h1
              className={cn(
                `inline animate-gradient md:text-6xl text-4xl font-extrabold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Available Cars
            </h1>
            {/* </AnimatedGradientText> */}
            <h4 className="text-lg text-left md:text-center">
              {`At Panghal Tour and Travels, we take pride in offering a diverse
              and well-maintained fleet of vehicles to cater to all your travel
              needs. Each vehicle in our fleet is meticulously maintained to
              ensure the highest standards of safety and comfort. Whether you're
              traveling for business, leisure, or any other purpose, we have the
              right car to suit your needs. Our commitment to quality and
              customer satisfaction means you can always expect a clean,
              reliable, and comfortable ride with Panghal Tour and Travels.
              Choose the perfect vehicle for your journey and enjoy the peace of
              mind that comes with our exceptional service. We look forward to
              making your travel experience unforgettable.`}
            </h4>
          </div>

          <div>
            <Marquee className="[--duration:20s]">
              {VEHICLES.map((item, ind) => (
                <div
                  className=" w-64  overflow-hidden flex flex-col items-center rounded-xl shadow-md bg-primary"
                  key={ind}
                >
                  <Image
                    height={100}
                    width={100}
                    className="w-full aspect-video h-full object-cover"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="text-white flex flex-col items-center justify-center gap-2 p-4">
                    <p className="font-bold">{item.name}</p>
                    <div className="flex gap-2">
                      {new Array(item.rating).fill("*").map((item, ind) => (
                        <Image
                          key={ind}
                          className="w-4"
                          height={100}
                          width={100}
                          src="/images/star.svg"
                          alt="star"
                        />
                      ))}
                    </div>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Testimonials
         */}
        <section
          id="testimonials"
          className="w-full  gap-16 flex flex-col items-center"
        >
          {/* <Meteors number={500} /> */}
          <div className="w-full  flex justify-center items-center gap-8 flex-col ">
            {/* <AnimatedGradientText> */}
            <h1
              className={cn(
                `inline animate-gradient md:text-6xl text-4xl font-extrabold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Our Testimonials
            </h1>
            {/* </AnimatedGradientText> */}
            <h4 className="text-lg text-left md:text-center">
              {`Here's what our customers have to say about their experiences with
              Panghal Tour and Travels. We take pride in delivering exceptional
              service and ensuring your journey is comfortable, safe, and
              memorable. Read on to discover how our diverse fleet of
              well-maintained vehicles and professional drivers have made a
              difference in our customers' travels. Whether it's a family trip,
              business travel, or a weekend getaway, our commitment to your
              satisfaction shines through in every testimonial.`}
            </h4>
          </div>

          <div>
            <Marquee className="[--duration:20s]">
              {TESTIMONAILS.map((item, ind) => (
                <div
                  className=" w-64  overflow-hidden flex flex-col items-center rounded-xl shadow-md bg-primary"
                  key={ind}
                >
                  {/* <Image
                    height={100}
                    width={100}
                    className="w-full aspect-video h-full object-cover"
                    src={item.img}
                    alt={item.name}
                  /> */}
                  <div className="text-white flex flex-col items-center justify-center gap-2 p-4">
                    <Image
                      key={ind}
                      className="w-16"
                      height={100}
                      width={100}
                      src="/images/user.svg"
                      alt="star"
                    />
                    <p className="font-bold">{item.name}</p>
                    <div className="flex gap-2">
                      {new Array(item.rating).fill("*").map((item, ind) => (
                        <Image
                          key={ind}
                          className="w-4"
                          height={100}
                          width={100}
                          src="/images/star.svg"
                          alt="star"
                        />
                      ))}
                    </div>
                    <p className="text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
