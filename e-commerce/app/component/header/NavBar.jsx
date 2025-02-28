"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const theem = "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { name: "Home", href: "/" },
    { name: "products", href: "/products" },
    { name: "Cart", href: "/cart" },
  ];

  return (
    <header className="relative bg-[#E7F0DC] dark:bg-[#1a1a1a] shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="/">
              <Image
                src={`${theem === "dark" ? "./Logo1.svg" : "./Logo2.svg"}`}
                alt="Logo"
                width={50}
                height={50}
              ></Image>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-sm">
                {links.map((link) => (
                  <Link
                    className="relative font-medium text-[#597445] transition-colors duration-300
                        hover:text-[#2c3a21] dark:text-[#E7F0DC] dark:hover:text-white
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-[#597445] after:transition-all after:duration-300
                        hover:after:w-full dark:after:bg-[#E7F0DC]"
                    href={link.href}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-[#597445] px-5 py-2.5 text-sm font-medium text-[#E7F0DC] 
                shadow-sm hover:bg-[#2c3a21] transition-colors duration-300"
                href="Login"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md border-2 border-[#597445] bg-transparent px-5 py-2.5 
                  text-sm font-medium text-[#597445] hover:bg-[#597445] hover:text-[#E7F0DC] 
                  transition-colors duration-300"
                  href="Register"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-[#597445] hover:bg-[#597445] hover:text-[#E7F0DC] 
                transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="absolute top-16 left-0 right-0 z-50 bg-[#E7F0DC] dark:bg-[#1a1a1a] 
            shadow-lg border-t border-[#597445]/20">
              <nav className="container mx-auto px-4">
                <div className="flex flex-col space-y-2 py-4">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[#597445] dark:text-[#E7F0DC] hover:bg-[#597445] 
                      hover:text-[#E7F0DC] dark:hover:bg-[#E7F0DC] dark:hover:text-[#597445] 
                      px-4 py-3 rounded-md transition-colors duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a
                    className="bg-[#597445] text-[#E7F0DC] hover:bg-[#2c3a21] 
                    px-4 py-3 rounded-md text-center transition-colors duration-300 font-medium"
                    href="Register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </a>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
