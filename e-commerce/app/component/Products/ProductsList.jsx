import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CardList from "./CardList";
import CardSkeleton from "./CardSkeleton";

const ProductsList = ({ Data, loading }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Increased stagger effect
        delayChildren: 0.2,   // Added delay before children start
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 ">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:w-full md:grid-cols-4 lg:grid-cols-4 max-w-[1200px] mx-auto px-4"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <CardSkeleton />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:w-full md:grid-cols-4 lg:grid-cols-4 max-w-[1200px] mx-auto px-4"
          >
            {Data.map((product) => (
              <motion.div
                key={product?.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  } 
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 } 
                }}
              >
                <CardList product={product}  />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsList;
