"use client";
import { ArrowLeft } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import BlogSection from "@/Component/Blog/page";
import PartnerLogos from "@/Component/PartnerCompany/page";

export default function About() {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M0,20 L20,0 M-5,5 L5,-5 M15,25 L25,15" stroke="white" strokeWidth="0.5" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white border-opacity-30 rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white border-opacity-20 rounded-full"></div>
        </div>

        <div className="relative flex flex-col gap-6 p-6 md:p-12 lg:p-16">
          <motion.button
            onClick={handleGoBack}
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 text-white hover:text-orange-100 transition-all duration-300 w-fit group bg-black bg-opacity-40 backdrop-blur-sm px-5 py-3 rounded-lg border border-white border-opacity-40 shadow-lg"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold tracking-wide">Back</span>
          </motion.button>

          <motion.div variants={fadeInUp} initial="hidden" animate="show" className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none drop-shadow-2xl">
                About
              </h1>
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none drop-shadow-2xl -mt-2">
                <span className="text-orange-200">Us</span>
              </h1>
            </div>
            <div className="max-w-2xl space-y-4">
              <p className="text-white text-lg md:text-xl leading-relaxed font-light tracking-wide">
                Business that develops strong creative cultures, will be in a prime position to spark ideas
              </p>
              <div className="flex items-center gap-3">
                <div className="w-20 h-0.5 bg-white bg-opacity-80"></div>
                <div className="w-10 h-0.5 bg-orange-200"></div>
                <div className="w-5 h-0.5 bg-white bg-opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Welcome Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-6 md:p-8"
      >
        <div className="text-center mb-20 mt-16 px-4">
          <p className="text-base md:text-lg font-bold tracking-widest text-gray-800 mb-4">
            WELCOME TO ALPHA BUSINESS
          </p>
          <p className="text-3xl md:text-5xl font-bold text-black max-w-4xl mx-auto mt-6 leading-snug">
            We bring you the best tools you need to work without efforts
          </p>
        </div>

        {/* Who We Are */}
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 tracking-wider">WHO WE ARE</h2>
              <div className="h-0.5 bg-gray-800 w-32 mb-8"></div>
              <div className="text-gray-600 leading-relaxed space-y-6 text-lg md:text-2xl">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                </p>
              </div>
            </motion.div>

            <div className="relative hidden md:block">
              <div className="absolute top-16 -left-16 w-full h-100 bg-orange-400"></div>
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl z-10">
                <img
                  className="w-full h-full object-cover"
                  src="./about-person.jpg"
                  alt="Business team working together"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual filler image in mobile */}
      <div className="md:hidden px-4">
        <motion.img
          src="./about-person4.jpg"
          alt="Mobile filler"
          className="w-full rounded-lg object-cover mb-6 shadow"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      {/* Our Mission Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16 md:mt-32 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <div className="relative hidden md:block">
            <div className="w-full bg-orange-400 h-[450px] relative">
              <img
                className="absolute -top-6 -left-16 w-[60%] h-[70%] object-cover"
                src="./about-person2.jpg"
                alt="Team 1"
              />
              <img
                className="absolute -right-20 -top-10 w-[60%] h-full object-cover"
                src="./about-person3.jpg"
                alt="Team 2"
              />
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 tracking-wider">OUR MISSION</h2>
            <div className="h-0.5 bg-gray-800 w-32 mb-8"></div>

            <div className="text-gray-600 leading-relaxed text-lg md:text-2xl mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>

            <ul className="text-gray-700 space-y-3 text-base md:text-xl font-medium list-none pl-4">
              {[
                "Brand strategy lorem ips",
                "Sales collateral dolor",
                "Logo & Branding",
                "Website Development",
                "Mobile App Development",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-orange-500"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Mobile-only image */}
            <div className="mt-10 md:hidden">
              <img
                src="./about-person4.jpg"
                alt="Our Work"
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <PartnerLogos />
      </div>
      <div>
        <BlogSection />
      </div>
    </div>
  );
}
