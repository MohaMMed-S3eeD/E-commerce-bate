import Image from "next/image";
import React from "react";

import Magnet from "../(components)/Magnet/Magnet";
import { useRouter } from "next/navigation";
const CardList = ({ product }) => {
  const router = useRouter(); // Add router hook

  // if (isLoading) {
  //   return <CardSkeleton />;
  // }

  if (!product || !product.img?.url) {
    return null;
  }
  const handlClick = (documentId) => {
    router.push(`/products/${documentId}`);
  };
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-color1 max-w-[300px] hover:-translate-y-1 group/card">
      <div className="relative h-[150px] sm:h-[200px] overflow-hidden group">
        <Image
          src={product?.img?.url}
          alt={"product"}
          width={300}
          height={200}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 to-transparent p-2 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300">
          <p className="text-[#E7F0DC] font-bold text-base sm:text-lg">
            ${product.price}
          </p>
        </div>
      </div>
      <div className="p-2 sm:p-3">
        <h4 className="text-base sm:text-lg font-semibold text-[#E7F0DC] mb-0.5 sm:mb-1 truncate">
          {product.title}
        </h4>
        <p className="text-[#E7F0DC]/80 text-[10px] sm:text-xs mb-1 sm:mb-2 line-clamp-1">
          {product.description}
        </p>
        <div className="w-full">
          <Magnet
            padding={5}
            disabled={false}
            magnetStrength={3}
            title="والنبي ل تجيب جنيه"
            className="w-full"
          >
            <button
              className="bg-[#597445] hover:bg-[#597445]/90 text-[#E7F0DC] 
              w-full
              px-4 py-1.5 sm:py-2
              rounded-md 
              transition-all duration-300 
              text-[10px] sm:text-sm md:text-base
              font-medium
              flex items-center justify-center
              transform hover:scale-[1.02] active:scale-[0.98] 
              hover:shadow-lg shadow-[#597445]/50"
            >
              Add to Cart
            </button>
          </Magnet>

          <button
            className="bg-[#597445] hover:bg-[#597445]/90 text-[#E7F0DC] 
              w-full
              px-4 py-1.5 sm:py-2
              rounded-md 
              transition-all duration-300 
              text-[10px] sm:text-sm md:text-base
              font-medium
              flex items-center justify-center
              transform hover:scale-[1.02] active:scale-[0.98] 
              hover:shadow-lg shadow-[#597445]/50 mt-3"
            onClick={() => {
              handlClick(product.documentId);
            }}
          >
            details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
