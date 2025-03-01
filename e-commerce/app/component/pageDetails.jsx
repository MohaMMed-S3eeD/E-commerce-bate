"use client";
import Image from "next/image";
import React from "react";

const pageDetails = ({ product }) => {
  return (
    <div className="w-full pb-4">
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group h-full">
            <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden 
                          backdrop-blur-sm
                          shadow-[0_0_15px_rgba(89,116,69,0.2)] 
                          transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={product?.img?.url}
                alt={product?.title}
                fill
                className="object-contain md:object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 md:space-y-6 p-2 md:p-3">
            <h1
              className="text-3xl font-bold text-[#597445] 
                         transition-all duration-300 hover:translate-x-2
                         drop-shadow-[0_0_8px_rgba(89,116,69,0.3)]"
            >
              {product?.title}
            </h1>

            <div
              className="text-2xl font-semibold text-[#597445] 
                           backdrop-blur-sm
                          inline-block px-4 py-2 rounded-lg
                          shadow-[0_0_15px_rgba(89,116,69,0.2)]
                          transition-all duration-300 hover:scale-105"
            >
              $
              {typeof product?.price === "number"
                ? product.price.toFixed(2)
                : "0.00"}
            </div>

            <div
              className="prose text-[#E7F0DC]  backdrop-blur-sm
                          p-6 rounded-lg shadow-[0_0_15px_rgba(89,116,69,0.2)]
                          transition-all duration-300 
                          hover:shadow-[0_0_25px_rgba(89,116,69,0.4)]"
            >
              <p className="text-base leading-relaxed">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageDetails;
