"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import productApi from "../(utils)/ProductApis";

// Define theme colors to match the existing theme
const themeColors = {
  color1: "#6A8D5B", // Enhanced green - more vibrant
  color2: "#E7F0DC", // Light background
  color3: "", // Dark background for cards
  hoverColor: "#7A9D6B", // Hover color
};

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoriesData = () => {
    productApi.getLatestProducts().then((res) => {
      console.log("Categories data:", res.data.data);
      
      // Create categories based on product types
      const productsByCategory = res.data.data.reduce((acc, product) => {
        // Use product attributes to categorize
        const categoryName = product.category || "Other Plants";
        
        if (!acc[categoryName]) {
          acc[categoryName] = {
            id: Object.keys(acc).length + 1,
            name: categoryName,
            description: `Explore our collection of ${categoryName.toLowerCase()}`,
            image: product.img?.url || "https://images.unsplash.com/photo-1545241047-6083a3684587",
            slug: categoryName.toLowerCase().replace(/\s+/g, '-'),
            products: []
          };
        }
        
        acc[categoryName].products.push(product);
        // Use the first product's image for the category if not already set
        if (!acc[categoryName].imageSet && product.img?.url) {
          acc[categoryName].image = product.img.url;
          acc[categoryName].imageSet = true;
        }
        
        return acc;
      }, {});
      
      // Convert the object to an array
      const categoriesArray = Object.values(productsByCategory);
      
      setCategories(categoriesArray.slice(0, 4)); // Limit to first 4 categories
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching categories:", error);
      setLoading(false);
      // Fallback to default categories if API fails
      setCategories([
        {
          id: 1,
          name: "Indoor Plants",
          description: "Perfect for home and office spaces",
          image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000",
          slug: "indoor-plants",
        },
        {
          id: 2,
          name: "Outdoor Plants",
          description: "Beautify your garden and landscape",
          image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1000",
          slug: "outdoor-plants",
        },
        {
          id: 3,
          name: "Succulents",
          description: "Low maintenance, high beauty",
          image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=1000",
          slug: "succulents",
        },
        {
          id: 4,
          name: "Herbs & Vegetables",
          description: "Grow your own food at home",
          image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000",
          slug: "herbs-vegetables",
        },
      ]);
    });
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div className="py-20 h-screen " style={{ backgroundColor: themeColors.color3, color: themeColors.color2 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 " style={{ color: themeColors.color2 }}>
            Explore Categories
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Discover our wide range of plant categories to bring nature into your space
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12" style={{ color: themeColors.color2 }}>
            Loading categories...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/products`}>
                <div 
                  className="relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  style={{ height: "400px", boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
                >
                  <div className="absolute inset-0">
                    <Image 
                      src={category.image}
                      alt={category.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.color2 }}>
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {category.description}
                    </p>
                    <button 
                      className="bg-[#3C5A34] hover:bg-[#2D4427] text-[#E7F0DC]  
                      px-4 py-2
                      rounded-md 
                      transition-all duration-300 
                      text-sm
                      font-semibold
                      flex items-center justify-center gap-2
                      w-full
                      transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Browse Collection ({category.products?.length || 0} items)
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
