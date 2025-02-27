import React from "react";
import { motion, useInView } from "framer-motion";
import CardList from "./CardList";

const ProductsList = ({ Data }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 1
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className=" py-12">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-xl md:text-5xl font-bold text-[#E7F0DC] mb-4">
          Featured Products
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          className="h-1 bg-[#597445] mx-auto"
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <p className="text-[#E7F0DC]/80 mt-4 max-w-2xl mx-auto px-4">
          Discover our handpicked selection of premium products just for you
        </p>
      </motion.div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:w-full md:grid-cols-4 lg:grid-cols-4 
          max-w-[1200px] mx-auto px-4"
      >
        {Data.map((product) => (
          <motion.div
            key={product?.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <CardList product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductsList;
