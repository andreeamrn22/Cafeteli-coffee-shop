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
            className="font-serif text-secondary text-xl space-y-4"
          >
            <p>
              Fondată în 2014, Cafeteli a pornit cu o misiune simplă, dar plină
              de pasiune: să aducă comunității din Constanța o cafea de calitate
              superioară, atent aleasă și pregătită pentru momente de răsfăț.
              De-a lungul anilor, am devenit un punct de referință pentru
              iubitorii de cafea, păstrând mereu aceleași valori: calitate,
              atenție la detalii și respect pentru clienți.
            </p>
            <p>
              Selectăm cu grijă fiecare produs și colaborăm cu parteneri de
              încredere, precum Leonard Caffe, pentru a aduce în fiecare ceașcă
              arome autentice și proaspete. Universul Cafeteli s-a extins și
              dincolo de cafea, cu ceaiuri rafinate Lovare, bomboane delicioase
              Bucuria și accesorii menite să transforme fiecare degustare într-o
              experiență completă.
            </p>
            <p>
              Pentru noi, fiecare ceașcă nu este doar o băutură, ci o poveste, o
              clipă de liniște și un mic ritual pe care îl împărtășim cu drag cu
              tine.
            </p>
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
