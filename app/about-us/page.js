'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const testimonialRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let intervalId;

    const scrollTestimonials = () => {
      if (testimonialRef.current && !isHovering) {
        testimonialRef.current.scrollLeft += 1;
        if (testimonialRef.current.scrollLeft >= testimonialRef.current.scrollWidth / 2) {
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
    { id: 1, text: "Pihtara Jewels' designs are truly unique and captivating. I love how each piece tells a story of the Himalayas.", author: "Sarah M." },
    { id: 2, text: "The quality of their jewelry is outstanding. I've never seen craftsmanship like this before.", author: "John D." },
    { id: 3, text: "I appreciate Pihtara's commitment to ethical practices. It makes wearing their jewelry even more special.", author: "Emily R." },
    { id: 4, text: "The attention to detail in every piece is remarkable. It's like wearing a piece of art.", author: "Michael T." },
  ];

  return (
    <div className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-onPrimary"
      >
        About Pihtara Jewels
      </motion.h1>

      {/* Who We Are Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-onPrimary">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-onSurface mb-4 text-sm sm:text-base">
              Pihtara Jewels is a premier jewelry brand that draws inspiration from the majestic Himalayas. Founded by passionate artisans and designers, we blend traditional craftsmanship with contemporary aesthetics to create unique, handcrafted pieces that tell a story.
            </p>
            <p className="text-onSurface text-sm sm:text-base">
              Our team consists of skilled artisans, gemologists, and designers who work together to bring the beauty of the Himalayas to life in every piece we create. We are committed to ethical sourcing and sustainable practices, ensuring that our jewelry not only looks beautiful but also contributes positively to the world.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Image
              src="/who-we-are.jpg"
              alt="Pihtara Jewels Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-onPrimary">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-onPrimary">Unique Designs</h3>
            <p className="text-onSurface text-sm sm:text-base">Each piece is a work of art, inspired by the Himalayas and crafted to perfection.</p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-onPrimary">Quality Assurance</h3>
            <p className="text-onSurface text-sm sm:text-base">We use only the finest materials and maintain strict quality control standards.</p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-onPrimary">Ethical Practices</h3>
            <p className="text-onSurface text-sm sm:text-base">We are committed to responsible sourcing and sustainable production methods.</p>
          </div>
        </div>
      </motion.section>

      {/* Our Mission and Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-onPrimary">Our Mission and Vision</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-onPrimary">Our Mission</h3>
            <p className="text-onSurface text-sm sm:text-base">
              To create exquisite jewelry that captures the essence of the Himalayas, while empowering local artisans and promoting sustainable practices in the jewelry industry.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-onPrimary">Our Vision</h3>
            <p className="text-onSurface text-sm sm:text-base">
              To become a globally recognized brand that sets the standard for ethical, innovative, and beautifully crafted jewelry, inspired by the timeless beauty of the Himalayas.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12"
       >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-onPrimary">What Our Customers Say</h2>
        <div 
          ref={testimonialRef}
          className="overflow-hidden whitespace-nowrap"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="inline-block animate-scroll">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div 
                key={index} 
                className="inline-block w-64 p-4 mx-4 bg-surface rounded-lg shadow-md"
              >
                <p className="text-onSurface text-sm mb-2">"{testimonial.text}"</p>
                <p className="text-onPrimary font-semibold text-sm">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
