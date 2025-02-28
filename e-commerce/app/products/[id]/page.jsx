"use client";
import productApi from "../../(utils)/ProductApis";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  console.log(productApi.getProductByID(id));

  const [product, setProduct] = useState({});
  const getProducts_ = () => {
    productApi.getProductByID(id).then((res) => {
      console.log(res.data[0]);
      setProduct(res.data[0]);
    });
  };
  useEffect(() => {
    getProducts_();
  }, []);
  return (
    <div>
      title : {product.title}
      <br />
      des :{product.description}
      <br />
      price :{product.price}
    </div>
  );
};

export default page;
