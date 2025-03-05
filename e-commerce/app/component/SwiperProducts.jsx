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
      setCart((oldCart) => [...oldCart, product]);
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
      className="py-8 md:py-12 lg:py-20"
      style={{ backgroundColor: "black", color: themeColors.color2 }}
    >
      <div className="container mx-auto px-3 md:px-4">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12 text-center"
          style={{ color: themeColors.color2 }}
        >
          Top Plants
        </h2>

        {loading ? (
          <div
            className="text-center py-6 md:py-8 lg:py-12"
            style={{ color: themeColors.color2 }}
          >
            Loading products...
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
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
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-10 md:pb-16 lg:pb-20"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    backgroundColor: themeColors.color3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    height: "auto",
                    maxHeight: "400px",
                    border: "1px solid #3A3A3A",
                  }}
                >
                  <div className="relative w-full" style={{ height: '150px', maxHeight: '40%' }}>
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
                  <div className="p-3 md:p-4 lg:p-6 flex flex-col flex-grow">
                    <h3
                      className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3 line-clamp-1"
                      style={{ color: themeColors.color2 }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-2 md:mb-3 lg:mb-6 text-xs md:text-sm line-clamp-2 md:line-clamp-1">
                      {product.description}
                    </p>
                    <div className="mt-auto flex flex-col gap-2">
                      <span
                        className="text-lg md:text-xl lg:text-2xl font-bold"
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
                          px-2 py-1 md:px-3 md:py-1.5 lg:py-2
                          rounded-md 
                          transition-all duration-300 
                          text-xs md:text-sm
                          font-semibold
                          flex items-center justify-center gap-1 md:gap-2
                          transform hover:scale-[1.02] active:scale-[0.98] 
                          hover:shadow-lg`}
                        >
                          {isProductInCart(product.documentId) ? "🗑️ Remove" : "Add to Cart"}
                        </button>

                        <Link
                          href={`/products/${product.documentId}`}
                          className="bg-[#3C5A34] hover:bg-[#2D4427] text-[#E7F0DC] 
                          w-full
                          px-2 py-1 md:px-3 md:py-1.5 lg:py-2
                          rounded-md 
                          transition-all duration-300 
                          text-xs md:text-sm
                          font-semibold
                          flex items-center justify-center gap-1 md:gap-2
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
          margin-top: 15px;
          bottom: -5px !important;
        }
        .swiper-pagination-bullet {
          background-color: #555;
          opacity: 0.6;
          width: 6px;
          height: 6px;
          margin: 0 3px;
        }
        .swiper-pagination-bullet-active {
          background-color: ${themeColors.color1};
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: ${themeColors.color1};
          background-color: rgba(0, 0, 0, 0.3);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 12px;
          font-weight: bold;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: ${themeColors.color2};
          background-color: ${themeColors.color1};
        }
        
        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px;
          }
          .swiper-pagination-bullet-active {
            width: 10px;
            height: 10px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 30px;
            height: 30px;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 14px;
          }
        }
        
        @media (min-width: 1024px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px;
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            height: 12px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
          }
        }
        
        /* Hide navigation arrows on small screens */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SwiperProducts;
