import React from "react";

const ProductSkeleton = () => {
    return (
        <div className="w-full pb-4">
          <div className="max-w-5xl mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Skeleton */}
              <div className="group h-full">
                <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden 
                              bg-[#e7f0dcaf] animate-pulse 
                              backdrop-blur-sm shadow-[0_0_15px_rgba(89,116,69,0.2)]">
                </div>
              </div>
              
              {/* Content Skeleton */}
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 p-2 md:p-3">
                <div className="h-8 w-3/4 bg-[#597445] rounded animate-pulse"></div>
                
                <div className="h-10 w-1/3 bg-[#597445] rounded animate-pulse"></div>
                
                <div className="h-24 bg-[#e7f0dcaf] rounded p-6 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ProductSkeleton;
