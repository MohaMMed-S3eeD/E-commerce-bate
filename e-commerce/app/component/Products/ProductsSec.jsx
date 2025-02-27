"use client";
import productApi from "../../(utils)/ProductApis";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const ProductsSec = () => {
  const [products, setProducts] = useState([]);
  const getLastProducts_ = () => {
    productApi.getLatestProducts().then((res) => {
      console.log(res.data.data);
      setProducts(res.data.data);
    });
  };
  useEffect(() => {
    getLastProducts_();
  }, []);
  return (
    <div className="h-screen ">
      <ProductsList Data={products} />
       
    </div>
  );
};

export default ProductsSec;
