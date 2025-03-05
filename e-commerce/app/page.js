import Hero from "./component/Hero/Hero";
import SwiperProducts from "./component/SwiperProducts";
import FeaturedCategories from "./component/FeaturedCategories";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SwiperProducts />
      <FeaturedCategories />
    </div>
  );
}
