"use client";
import React from "react";
import productApi from "../(utils)/ProductApis";
import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../(context)/CartContext";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Define theme colors
const themeColors = {
  color1: "#6A8D5B", // Enhanced green - more vibrant
  color2: "#E7F0DC", // Light background
  color3: "#2B2B2B", // Dark background for cards
  hoverColor: "#7A9D6B", // Hover color
};

const SwiperProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const router = useRouter();

  const getLastProducts_ = () => {
    productApi.getLatestProducts().then((res) => {
      console.log("hi start", res.data.data);
      setProducts(res.data.data.slice(0, 6)); // Limit to first 6 products
      setLoading(false);
    });
  };

  useEffect(() => {
    getLastProducts_();
  }, []);

  // Check if a product is in cart
  const isProductInCart = (productId) => {
    return cart.some((item) => item.documentId === productId);
  };

  // Add to cart function
  const addCart = async (product) => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    
    try {
      const response = await fetch(
        "https://e-commerce-strapi-railway-production.up.railway.app/api/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              UserName: user?.fullName,
              EmailUser: user?.primaryEmailAddress.emailAddress,
              products: [product?.documentId],
            },
          }),
        }
      );

      const result = await response.json();
      console.log("Cart added:", result);
      setCart((oldCart) => [...oldCart, product]);
      console.log("Cart:", cart);
    } catch (error) {
      console.error("Error adding cart:", error);
    }
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.documentId !== productId)
    );
  };

  return (
    <div
      className="h-screen pt-20 pb-24"
      style={{ backgroundColor: "black", color: themeColors.color2 }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: themeColors.color2 }}
        >
          Top Plants
        </h2>

        {loading ? (
          <div
            className="text-center py-12"
            style={{ color: themeColors.color2 }}
          >
            Loading products...
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    backgroundColor: themeColors.color3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    height: "470px",
                    border: "1px solid #3A3A3A",
                  }}
                >
                  <div className="relative h-[900px] w-full ">
                    <Image
                      src={product.img.url}
                      alt={product.title}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      className="hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: themeColors.color2 }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-6  text-sm line-clamp-1">
                      {product.description}
                    </p>
                    <div className="mt-auto flex flex-col gap-2">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: themeColors.color1 }}
                      >
                        ${product.price}
                      </span>
                      <div className="flex flex-col gap-2 w-full">
                        <button
                          onClick={() => 
                            isProductInCart(product.documentId) 
                              ? removeFromCart(product.documentId) 
                              : addCart(product)
                          }
                          className={`${
                            isProductInCart(product.documentId)
                              ? "bg-[#9B2C2C] hover:bg-[#7C2222] shadow-[#9B2C2C]/50"
                              : "bg-[#3C5A34] hover:bg-[#2D4427] shadow-[#3C5A34]/50"
                          }
                          text-[#E7F0DC] 
                          w-full
                          px-3 py-2
                          rounded-md 
                          transition-all duration-300 
                          text-sm
                          font-semibold
                          flex items-center justify-center gap-2
                          transform hover:scale-[1.02] active:scale-[0.98] 
                          hover:shadow-lg`}
                        >
                          {isProductInCart(product.documentId) ? "🗑️ Remove" : "Add to Cart"}
                        </button>

                        <Link
                          href={`/products/${product.documentId}`}
                          className="bg-[#3C5A34] hover:bg-[#2D4427] text-[#E7F0DC] 
                          w-full
                          px-3 py-2
                          rounded-md 
                          transition-all duration-300 
                          text-sm
                          font-semibold
                          flex items-center justify-center gap-2
                          transform hover:scale-[1.02] active:scale-[0.98] 
                          hover:shadow-lg shadow-[#3C5A34]/50 text-center"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Custom CSS for Swiper navigation and pagination */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 20px;
          bottom: -10px !important;
        }
        .swiper-pagination-bullet {
          background-color: #555;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 6px;
        }
        .swiper-pagination-bullet-active {
          background-color: ${themeColors.color1};
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: ${themeColors.color1};
          background-color: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: ${themeColors.color2};
          background-color: ${themeColors.color1};
        }
      `}</style>
    </div>
  );
};

export default SwiperProducts;
