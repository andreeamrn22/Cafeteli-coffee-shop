import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import coffee from "../../assets/website/coffee.json";
import line_frame from "../../assets/website/line_frame.jpg";

const About = () => {
  return (
    <div id="about" className="py-20 cursor-default">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-5xl text-primary font-serif font-bold text-center"
      >
        Despre noi
      </motion.h1>
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-20 md:gap-14 px-5 md:px-8 lg:mx-auto">
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Lottie
            animationData={coffee}
            className="md:w-[300px] lg:w-[350px] pt-10"
          />
        </motion.div>

        {/* text section */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl font-serif text-secondary mt-10"
          >
            Pasiunea pentru o cafea perfectă
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-serif text-secondary text-lg"
          >
            Fondată în 2014, Bean Haven a început ca o mică rulotă cu cafea în
            inima orașului. Fondatoarii noastri, Marin Daniel și Marin Nina, au
            avut viziunea de a aduce comunității noastre cea mai fină cafea,
            provenită din surse etice. Ceea ce a început ca o dragoste pentru
            ceașca perfectă de cafea a crescut într-o afacere înfloritoare, dar
            valorile noastre fundamentale rămân aceleași. Credem că o cafea
            excelentă este o formă de artă. De la selectarea cu atenție a celor
            mai bune boabe de la ferme sustenabile din întreaga lume până la
            prăjirea meticuloasă a acestora până la perfecțiune, fiecare pas din
            procesul nostru este realizat cu dragoste și expertiză.
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <motion.img
          src={line_frame}
          className="py-2 rotate-180"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>
    </div>
  );
};

export default About;
