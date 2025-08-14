import React from "react";
import { motion } from "framer-motion";
import GoogleReviewsWidget from "google-reviews-widget";

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div id="testimonials" className="cursor-default">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-10">
          <motion.h1
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center text-4xl text-secondary font-bold font-serif"
          >
            Vino și tu în rândul
          </motion.h1>
          <motion.h1
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center text-4xl text-secondary font-bold font-serif"
          >
            clienților noștri mulțumiți
          </motion.h1>
        </div>
        {/* Slider section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-primary/10 p-6 rounded-lg shadow-lg"
        >
          <GoogleReviewsWidget instanceId="zgloWUQSl9x3rvJGNIiQ" />
          <GoogleReviewsWidget instanceId="0sOUwcNRHyqIxk1Iuxnp" />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
