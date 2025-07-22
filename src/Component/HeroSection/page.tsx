'use client';
import { motion, Variants } from 'framer-motion';

// --- Data & Animations (Defined outside the component) ---

// By defining variants outside, they aren't recreated on every render.
const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 120, damping: 10 }
    },
};

const textParentVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const textChildVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
};

// Image data is now in an array, making it easy to manage.
const heroImages = [
    { src: "/powertool3.jpeg", alt: "Power Tool 1", className: "col-start-1 row-start-1" },
    { src: "/powertool4.jpeg", alt: "Power Tool 2", className: "col-start-2 row-start-1 self-end" },
    { src: "/powertool1.jpeg", alt: "Power Tool 3", className: "col-start-1 row-start-2 justify-self-end" },
    { src: "/powertool2.jpeg", alt: "Power Tool 4", className: "col-start-2 row-start-2" }
];

// --- Main Component ---

export default function HeroSection() {
    return (
        <div className="relative bg-gray-50 overflow-hidden min-h-[100vh] lg:min-h-[85vh] pt-10 lg:pt-20 flex items-center w-full">
            {/* Background Dots */}
            <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                    backgroundImage: "url('/279.jpg')",
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Image Grid (Refactored) */}
                <div className="order-1 lg:order-2 w-full h-[400px] grid grid-cols-2 grid-rows-2 gap-4">
                    {heroImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-xl overflow-hidden shadow-xl ${image.className}`}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* Animated Text Content */}
                <motion.div
                    className="order-2 lg:order-1 space-y-6"
                    variants={textParentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-700 leading-tight" variants={textChildVariants}>
                        Power Up Your Projects with{' '}
                        <span className="text-orange-500">Precision Tools</span>
                    </motion.h1>

                    <motion.p className="text-lg text-gray-700 leading-relaxed max-w-xl" variants={textChildVariants}>
                        Explore our premium power tools engineered for maximum durability and performance. Trusted by professionals, crafted for creators.
                    </motion.p>

                    <motion.div className="flex flex-wrap gap-4 pt-4" variants={textChildVariants}>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:shadow-lg">
                            View All Products
                        </button>
                        <button className="bg-orange-800 hover:bg-orange-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:shadow-lg">
                            Contact Us
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}