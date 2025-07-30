"use client";
import { motion, easeOut } from "framer-motion";

const LOGOS = [
  './brand/accurate.png',
  './brand/Cbond.png',
  './brand/Mittal_Steel_Company_logo.svg',
  './brand/dahoo.png',
  './brand/dendrite.png',
  './brand/fixwell.png',
  './brand/karigar.png',
  './brand/link.png',
  './brand/marigold.png',
  './brand/nerofix.png',
  './brand/norton.png',
  './brand/samrat.png',
  './brand/suriepolex.png',
  './brand/thunderbolt.png'
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function PartnerLogos() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          The Bond Goes a Long Way
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          We’re proud to have built enduring relationships with some of the most trusted brands.
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {LOGOS.map((src, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-[120px] md:w-[150px] flex justify-center items-center p-2 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
