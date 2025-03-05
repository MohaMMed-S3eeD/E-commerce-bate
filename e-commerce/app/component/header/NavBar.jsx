"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import React, { use, useContext, useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { CartContext } from "../../(context)/CartContext";

import { useRouter } from "next/navigation";
const NavBar = () => {
  const { user, isLoaded } = useUser();
  const theem = "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const links = [
    { name: "Home", href: "/" },
    { name: "products", href: "/products" },
  ];

  // Wait for user data to load before rendering
  if (!isLoaded) {
    return null;
  }
  const { cart, setCart } = useContext(CartContext);
  return (
    user && (
      <header className="md:mx-10 xl:mx-10 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="./Logo1.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="drop-shadow-glow"
                />
                <span className="hidden sm:block text-lg font-bold text-[#E7F0DC]">
                  Mo - Shop
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-2 py-1 text-[#E7F0DC] font-medium tracking-wide
                    before:content-[''] before:absolute before:-bottom-1 before:left-0 
                    before:w-0 before:h-0.5 before:rounded-full before:opacity-0 
                    before:transition-all before:duration-300 before:bg-[#597445]
                    hover:before:w-full hover:before:opacity-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-6">
              {/* Cart Button */}
              <button
                onClick={() => router.push("/Cart")}
                className="relative p-2 text-[#E7F0DC] hover:text-[#597445] transition-colors"
              >
                <PiShoppingCartSimpleThin className="text-2xl" />
                {cart?.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#597445] text-[#E7F0DC] 
                    text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center
                    animate-pulse"
                  >
                    {cart?.length}
                  </span>
                )}
              </button>

              {/* Auth Buttons */}
              <SignedOut>
                <div className="flex items-center space-x-4">
                  <SignInButton>
                    <button className="px-4 py-2 text-sm font-medium text-[#E7F0DC] 
                      hover:text-[#597445] transition-colors"
                    >
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-2 text-sm font-medium bg-[#597445] 
                      text-[#E7F0DC] rounded-lg hover:bg-[#597445]/80 
                      transition-all duration-300 shadow-lg shadow-[#597445]/20"
                    >
                      Register
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-8 h-8'
                    }
                  }}
                  afterSignOutUrl="/" 
                />
              </SignedIn>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[#E7F0DC] hover:text-[#597445] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 border-t border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 py-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-[#E7F0DC] hover:bg-[#597445]/20 
                    rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    )
  );
};

export default NavBar;
