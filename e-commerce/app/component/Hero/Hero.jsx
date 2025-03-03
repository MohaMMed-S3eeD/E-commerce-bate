import React from "react";
import Magnet from "../(components)/Magnet/Magnet";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 lg:py-24 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center lg:gap-20">
          {/* Image div - now first on mobile */}
          <div className="relative perspective-1000 md:order-last">
            <div className="animate-float-smooth relative rounded-2xl">
              <div className="absolute -left-4 -top-4 h-32 w-32 animate-pulse rounded-full bg-[#E7F0DC]/40 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 h-40 w-40 animate-pulse-slow rounded-full bg-[#597445]/15 blur-3xl"></div>

              <div className="group relative isolate rounded-2xl border border-[#597445]/20 bg-gradient-to-tr from-white/50 to-transparent p-3 backdrop-blur-sm transition-all duration-700 hover:border-[#597445]/30">
                <img
                  src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="relative z-10 rounded-xl object-cover transition-all duration-700 will-change-transform group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_-15px_rgba(89,116,69,0.35)]"
                  alt="Premium Natural Product"
                />
                <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl border border-[#597445]/20 bg-gradient-to-tr from-[#E7F0DC]/20 to-transparent transition-all duration-700 group-hover:-bottom-3 group-hover:-right-3"></div>
                <div className="absolute -bottom-1 -right-1 h-full w-full rounded-2xl border border-[#597445]/10 bg-gradient-to-tr from-[#E7F0DC]/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text content - now second on mobile */}
          <div className="transform space-y-10 text-center md:text-left md:order-first">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-4xl xl:text-5xl">
              Premium Quality
              <span className="relative mt-2 block">
                <span className="relative animate-gradient bg-gradient-to-r from-[#597445] via-[#7c9768] to-[#597445] bg-[200%_auto] bg-clip-text text-transparent">
                  Natural Products 
                </span>
                <span className="absolute -bottom-2 left-0 h-1.5 w-1/3 animate-pulse bg-gradient-to-r from-[#597445] to-transparent"></span>
              </span>
            </h2>

            <p className="mx-auto max-w-lg text-lg leading-relaxed text-zinc-600 md:mx-0">
              Discover our handpicked collection of eco-friendly products that
              combine elegance with sustainability. Each item tells a story of
              quality and care. 
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              <Magnet
                padding={25}
                disabled={false}
                magnetStrength={1}
                title="والنبي ل تجيب جنيه" 
              >
                <a
                  href="#"
                  className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#597445] px-8 py-4 transition-all duration-300 ease-out hover:bg-[#597445]/90 hover:shadow-lg hover:shadow-[#597445]/20"
                >
                  <span className="relative flex items-center gap-2 font-medium text-white">
                    Shop Now
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </Magnet>

              <a
                href="#"
                className="group relative inline-flex items-center overflow-hidden rounded-lg border-2 border-[#597445] bg-transparent px-8 py-4 transition-all duration-300 ease-out hover:bg-[#597445]/5"
              >
                <span className="relative flex items-center gap-2 font-medium text-[#597445]">
                  Learn More
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
