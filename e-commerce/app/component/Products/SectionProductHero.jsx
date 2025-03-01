"use client";
import React from "react";
import ProductsSec from "./ProductsSec";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const SectionProductHero = () => {
    const DynamicComponent = dynamic(
        () => import("./ProductsSec"),
        {
          loading: () => <Loader />,
        }
      );
  return (
    <div>
      {/* Static header without animations */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-xl md:text-5xl font-bold text-[#E7F0DC] mb-4">
          Featured Products
        </h2>
        <div className="h-1 bg-[#597445] mx-auto w-[100px]" />
        <p className="text-[#E7F0DC]/80 mt-4 max-w-2xl mx-auto px-4">
          Discover our handpicked selection of premium products just for you
        </p>
      </div>
      <DynamicComponent />
    </div>
  );
};

export default SectionProductHero;
