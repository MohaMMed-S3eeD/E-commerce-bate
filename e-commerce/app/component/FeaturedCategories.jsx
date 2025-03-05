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

  // Default Other Plants placeholder category
  const otherPlantsCategory = {
    name: "Other Plants",
    description: "Explore our collection of other unique plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587",
    slug: "other-plants",
    products: []
  };

  // Array of alternative descriptions for duplicate categories
  const otherPlantVariants = [
    {
      name: "Tropical Plants",
      description: "Exotic plants from tropical regions",
      image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1000",
      slug: "tropical-plants"
    },
    {
      name: "Flowering Plants",
      description: "Beautiful blooming plants for your space",
      image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=1000",
      slug: "flowering-plants"
    },
    {
      name: "Rare Species",
      description: "Unique and hard-to-find plant varieties",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000",
      slug: "rare-species"
    },
    {
      name: "Seasonal Plants",
      description: "Perfect plants for this season",
      image: "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?q=80&w=1000",
      slug: "seasonal-plants"
    }
  ];

  const getCategoriesData = () => {
    productApi.getLatestProducts().then((res) => {
      
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
      let categoriesArray = Object.values(productsByCategory);
      
      // If we have fewer than 4 categories, add duplicates of "Other Plants" with different names
      if (categoriesArray.length < 4) {
        const otherPlantsIndex = categoriesArray.findIndex(cat => cat.name === "Other Plants");
        
        // Create a base "Other Plants" category if it doesn't exist
        let otherPlants = otherPlantsIndex >= 0 
          ? categoriesArray[otherPlantsIndex] 
          : { 
              ...otherPlantsCategory, 
              id: categoriesArray.length + 1,
              products: [] 
            };
            
        // Add duplicates with different names until we have 4 categories
        let variantIndex = 0;
        while (categoriesArray.length < 4) {
          const variant = otherPlantVariants[variantIndex % otherPlantVariants.length];
          
          categoriesArray.push({
            id: categoriesArray.length + 1,
            name: variant.name,
            description: variant.description,
            image: variant.image,
            slug: variant.slug,
            products: [...otherPlants.products] // Share the same products
          });
          
          variantIndex++;
        }
      }
      
      setCategories(categoriesArray.slice(0, 4)); // Limit to first 4 categories
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching categories:", error);
      setLoading(false);
      
      // Create fallback categories with the default and variants
      const fallbackCategories = [
        {
          id: 1,
          name: "Indoor Plants",
          description: "Perfect for home and office spaces",
          image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000",
          slug: "indoor-plants",
          products: []
        },
        ...otherPlantVariants.slice(0, 3).map((variant, index) => ({
          id: index + 2,
          name: variant.name,
          description: variant.description,
          image: variant.image,
          slug: variant.slug,
          products: []
        }))
      ];
      
      setCategories(fallbackCategories);
    });
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div className="py-10 md:py-16 lg:py-20 min-h-[80vh]" style={{ backgroundColor: themeColors.color3, color: themeColors.color2 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: themeColors.color2 }}>
            Explore Categories
          </h2>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto px-2">
            Discover our wide range of plant categories to bring nature into your space
          </p>
        </div>

        {loading ? (
          <div className="text-center py-8 md:py-12" style={{ color: themeColors.color2 }}>
            Loading categories...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/products`}>
                <div 
                  className="relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  style={{ height: "300px", boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{ color: themeColors.color2 }}>
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm opacity-90 mb-3 md:mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <button 
                      className="bg-[#3C5A34] hover:bg-[#2D4427] text-[#E7F0DC]  
                      px-3 py-1.5 md:px-4 md:py-2
                      rounded-md 
                      transition-all duration-300 
                      text-xs md:text-sm
                      font-semibold
                      flex items-center justify-center gap-2
                      w-full
                      transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Browse Collection ({category.products?.length || 0})
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
