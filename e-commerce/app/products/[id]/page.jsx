"use client";
import dynamic from "next/dynamic";
import productApi from "../../(utils)/ProductApis";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../../component/Loader";
import ProductSkeleton from "../../component/Products/ProductSkeleton";
const page = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const getProducts_ = () => {
    productApi.getProductByID(id).then((res) => {
      setProduct(res.data[0]);
      setLoading(false);
    });
  };
  useEffect(() => {
    getProducts_();
  }, []);
  const DynamicComponent = dynamic(
    () => import("../../component/pageDetails"),
    {
      loading: () => <Loader />,
    }
  );
  return (
    <div className="mt-10 flex flex-col items-center justify-center min-h-screen w-full py-8 bg-[#000000]">
      <div className="text-center mb-12 mt-4">
        <h2 className="text-3xl sm:text-xl md:text-5xl font-bold text-[#E7F0DC] mb-4">
          Product Details
        </h2>
        <div className="h-1 bg-[#597445] mx-auto w-[100px]" />
        <p className="text-[#E7F0DC]/80 mt-4 max-w-2xl mx-auto px-4">
          Detailed information about this product
        </p>
      </div>
      {loading ? <ProductSkeleton /> : <DynamicComponent product={product} />}
    </div>
  );
};

export default page;
