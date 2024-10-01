"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Diamond from "../assets/diamond.jpg";
import WhoWeAre from "../assets/whoweare.jpg";
import WhatWeDo from "../assets/whatwedo.jpg";
import { Baskervville, Satisfy } from "next/font/google";
import OurMission from "../assets/our-mission.jpg";
import OurVision from "../assets/our-vision.jpg";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});
const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

const AboutUs = () => {
  const testimonialRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let intervalId;

    const scrollTestimonials = () => {
      if (testimonialRef.current && !isHovering) {
        testimonialRef.current.scrollLeft += 1;
        if (
          testimonialRef.current.scrollLeft >=
          testimonialRef.current.scrollWidth / 2
        ) {
          testimonialRef.current.scrollLeft = 0;
        }
      }
    };

    if (!isHovering) {
      intervalId = setInterval(scrollTestimonials, 30);
    }

    return () => clearInterval(intervalId);
  }, [isHovering]);

  const testimonials = [
    {
      id: 1,
      text: "Pihtara Jewels' designs are truly unique and captivating. I love how each piece tells a story of the Himalayas.",
      author: "Sarah M.",
    },
    {
      id: 2,
      text: "The quality of their jewelry is outstanding. I've never seen craftsmanship like this before.",
      author: "John D.",
    },
    {
      id: 3,
      text: "I appreciate Pihtara's commitment to ethical practices. It makes wearing their jewelry even more special.",
      author: "Emily R.",
    },
    {
      id: 4,
      text: "The attention to detail in every piece is remarkable. It's like wearing a piece of art.",
      author: "Michael T.",
    },
  ];

  return (
    <div className="md:pt-[calc(80px+55px)] pt-[80px]  max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${Diamond.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingBottom: "20px",
          backdropFilter: "blur(10px)",
        }}
        className={`text-3xl h-[300px] bg-primary w-full px-4 sm:px-6 lg:px-12 items-center justify-center flex  sm:text-4xl font-bold text-center mb-8 text-accent`}
      >
        <span className="lg:text-8xl md:text-6xl text-4xl">About Us</span>
      </motion.h1>

      {/* Who We Are Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 px-4 sm:px-6 lg:px-12"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2
              className={`${baskervville.className} text-2xl sm:text-3xl mb-4 text-onPrimary`}
            >
              Who We Are
            </h2>

            <p className="text-onSurface mb-4 text-sm sm:text-base">
              Pihtara Jewels is a premier jewelry brand that draws inspiration
              from the majestic Himalayas. Founded by passionate artisans and
              designers, we blend traditional craftsmanship with contemporary
              aesthetics to create unique, handcrafted pieces that tell a story.
            </p>
            <p className="text-onSurface text-sm sm:text-base">
              Our team consists of skilled artisans, gemologists, and designers
              who work together to bring the beauty of the Himalayas to life in
              every piece we create. We are committed to ethical sourcing and
              sustainable practices, ensuring that our jewelry not only looks
              beautiful but also contributes positively to the world.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Image
              src={WhoWeAre.src}
              alt="Pihtara Jewels Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </motion.section>
      {/* Sub Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12 px-4 sm:px-6 lg:px-12"
      >
        <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-lg">
          <Image
            src={WhatWeDo.src}
            alt="Himalayan Inspiration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div
            className={` ${baskervville.className} absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
          >
            <h2
              className={` text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4`}
            >
              Inspired by the Majesty of the Himalayas
            </h2>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12 px-4 bg-primary py-12 sm:px-6 lg:px-12"
      >
        <div className={`${baskervville.className}`}>
          <h2
            className={` text-2xl sm:text-3xl mb-4 font-bold text-center text-onPrimary`}
          >
            Why Choose Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-surface px-7  justify-center flex flex-col items-center md:py-14 py-6 rounded-md shadow-md translate-y-0 lg:-translate-y-4">
            <div className={`${satisfy.className}`}>
              <h3
                className={`text-lg sm:text-xl mb-2 text-onPrimary font-bold`}
              >
                Unique Designs
              </h3>
            </div>
            <p className="text-onSurface text-sm sm:text-base">
              Each piece is a work of art, inspired by the Himalayas and crafted
              to perfection.
            </p>
          </div>
          <div className="bg-surface px-7 md:py-14 py-6  justify-center flex flex-col items-center rounded-md shadow-md transform translate-y-0 lg:translate-y-4">
            <div className={`${satisfy.className}`}>
              <h3
                className={`text-lg sm:text-xl mb-2 text-onPrimary font-bold`}
              >
                Quality Assurance
              </h3>
            </div>
            <p className="text-onSurface text-sm sm:text-base">
              We use only the finest materials and maintain strict quality
              control standards.
            </p>
          </div>
          <div className="bg-surface px-7  md:py-14 py-6 justify-center flex flex-col items-center rounded-tl-lg rounded-br-lg shadow-md  translate-y-0 lg:-translate-y-6">
            <div className={`${satisfy.className}`}>
              <h3
                className={`text-lg sm:text-xl mb-2 text-onPrimary font-bold`}
              >
                Ethical Practices
              </h3>
            </div>
            <p className="text-onSurface text-sm sm:text-base">
              We are committed to responsible sourcing and sustainable
              production methods.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Mission and Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12 "
      >
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <img
            src={OurMission.src}
            alt="Description of the image"
            className="w-[90%] h-auto rounded-tr-[15%] object-cover rounded-br-[15%] py-6 pr-6 border-t-2 border-b-2 border-r-2 border-accent"
          />
          <div>
            <div className={`${baskervville.className}`}>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold text-center px-8 mb-4 text-onPrimary`}
              >
                Our Mission
              </h2>
            </div>
            <div className="text-onSurface text-sm sm:text-base md:pr-12 px-6">
              <p>
                Veliciae is a passionate team of artisans and designers who
                believe in the art of storytelling through jewelry. With a keen
                eye for modern trends and timeless classics, our vision is to
                create a brand where every piece tells its own story.
              </p>
              <br />
              <p>
                From concept to creation, we are involved in every step to ensure
                our customers receive only the finest products. At Veliciae, we
                pride ourselves on creativity, quality, and integrity in
                everything we do.
              </p>
              <br />
              <p>
                Our mission extends beyond creating beautiful jewelry. We are
                committed to:
              </p>
              <ul className="list-disc list-inside mt-2 mb-4 space-y-2">
                <li className="text-onPrimary ">
                  <span className="font-semibold">Preserving</span> traditional
                  craftsmanship
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Supporting</span> local
                  artisans and their communities
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Promoting</span> sustainable
                  and ethical practices in sourcing materials
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Innovating</span> in design
                  while respecting cultural heritage
                </li>
              </ul>
              <p>
                Through our work, we aim to bridge the gap between ancient
                traditions and modern aesthetics, creating pieces that are not
                just accessories, but{" "}
                <span className="text-onPrimary font-semibold italic">
                  works of art that carry meaning and purpose
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        {/* Our Vision Section */}
        <div className="grid md:grid-cols-2 grid-cols-1  pt-12">
          <div className="px-4 md:pl-8">
            <div className={`${baskervville.className}`}>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold text-center px-8 mb-4 text-onPrimary`}
              >
                Our Vision
              </h2>
            </div>
            <div className={` text-onSurface text-sm sm:text-base md:pr-12 px-6`}>
              <p>
                At Veliciae, our vision is to redefine the art of jewelry making. We are more than just a brand; we are storytellers, innovators, and guardians of ancient craftsmanship. Our passionate team of artisans and designers blend modern trends with timeless classics, creating pieces that are not just beautiful, but meaningful.
              </p>
              <br />
              <p>
                We believe in the power of jewelry to tell stories, evoke emotions, and connect people across cultures and generations. Each piece we create is a testament to this belief, carefully crafted to carry its own unique narrative.
              </p>
              <br />
              <p>
                Our vision extends beyond mere aesthetics. We are committed to:
              </p>
              <ul className="list-disc list-inside mt-2 mb-4 space-y-2">
                <li className="text-onPrimary ">
                  <span className="font-semibold">Preserving</span> and celebrating traditional craftsmanship
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Empowering</span> local artisans and their communities
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Championing</span> sustainable and ethical practices in every aspect of our work
                </li>
                <li className="text-onPrimary ">
                  <span className="font-semibold">Pushing</span> the boundaries of design while honoring cultural heritage
                </li>
              </ul>
              <p>
                Through our creations, we strive to bridge the gap between the past and the future, crafting pieces that are not just accessories, but{" "}
                <span className="text-onPrimary font-semibold italic">
                  living embodiments of artistry, heritage, and innovation
                </span>
                . At Veliciae, we don't just make jewelry; we create legacies.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src={OurVision.src}
              alt="Our Vision"
              className="w-[90%] h-auto rounded-tl-[15%] object-cover rounded-bl-[15%] py-6 pl-6 border-t-2 border-b-2  border-accent"
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12 px-4 sm:px-6 lg:px-12"
      >  
        <div className={`${baskervville.className}`}>
        <h2 className={`text-2xl sm:text-5xl font-bold mb-4 text-center text-onPrimary`}>
          Testimonials
        </h2>
        </div>
        <div
          ref={testimonialRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex animate-scroll py-6">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 mx-4 bg-accent  hover:bg-surface rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative mb-4">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-onPrimary opacity-25" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className={`${baskervville.className} text-onSurface text-base italic pl-10`}>
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-onPrimary rounded-full flex items-center justify-center mr-4">
                    <span className={`${satisfy.className} text-surface text-xl`}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <p className={`${baskervville.className} text-onPrimary font-semibold`}>
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </motion.section>
    </div>
  );
};

export default AboutUs;
