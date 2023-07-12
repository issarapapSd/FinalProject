import React from "react";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
const NotFound = () => {
  return (
    <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
      <div className="z-10 mt-32 md:basis-3/5">
        <motion.div
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="items-center before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
              <HText>404 NotFound</HText>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
