import Image from "next/image";
import React, { useContext } from "react";

import { useRouter } from "next/navigation";
import { CartContext } from "../../(context)/CartContext";
import { useUser } from "@clerk/nextjs";
const CardList = ({ product }) => {
  const { user } = useUser();
  const router = useRouter(); // Add router hook
  const { cart, setCart } = useContext(CartContext);
  if (!user) {
    router.push("/sign-in");
  }
  // Check if product is in cart
  const isInCart = cart.some((item) => item.documentId === product?.documentId);

  const addCart = async () => {
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

  const removeFromCart = () => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.documentId !== product?.documentId)
    );
  };

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
          <button
            onClick={() => (isInCart ? removeFromCart() : addCart())}
            className={`${
              isInCart
                ? "bg-[#9B2C2C] hover:bg-[#7C2222] shadow-[#9B2C2C]/50"
                : "bg-[#3C5A34] hover:bg-[#2D4427] shadow-[#3C5A34]/50"
            }
              text-[#E7F0DC] 
              w-full
              px-3 py-1 sm:py-2
              rounded-md 
              transition-all duration-300 
              text-xs sm:text-sm md:text-base
              font-semibold
              flex items-center justify-center gap-2
              transform hover:scale-[1.02] active:scale-[0.98] 
              hover:shadow-lg`}
          >
            {isInCart ? "🗑️ Remove" : "Add to Cart"}
          </button>

          <button
            className="bg-[#3C5A34] hover:bg-[#2D4427] text-[#E7F0DC] 
              w-full
              px-3 py-1 sm:py-2
              rounded-md 
              transition-all duration-300 
              text-xs sm:text-sm md:text-base
              font-semibold
              flex items-center justify-center gap-2
              transform hover:scale-[1.02] active:scale-[0.98] 
              hover:shadow-lg shadow-[#3C5A34]/50 mt-2"
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
