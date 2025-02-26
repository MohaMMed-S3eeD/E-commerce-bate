import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const theem = "dark";
  const links = [
    { name: "Home", href: "/" },
    { name: "products", href: "/products" },
    { name: "Cart", href: "/cart" },
  ];
  return (
    <header className="bg-white dark:bg-black dark:shadow-colorOne shadow-sm dark:shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#">
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
              <ul className="flex items-center gap-6 text-sm">
                {links.map((link) => (
                  <Link
                    className="relative font-medium text-gray-700 transition-colors duration-200
                        hover:text-colorOne dark:text-gray-200 dark:hover:text-colorOne
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-colorOne after:transition-all after:duration-300
                        hover:after:w-full dark:after:bg-colorOne"
                    href={link.href}
                    key={link.name} // Added key prop for React list rendering
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
                className="rounded-md bg-colorOne px-5 py-2.5 text-sm font-medium text-[#ffffff] shadow-sm dark:hover:bg-[#E7F0DC] dark:hover:text-colorOne"
                href="Login"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-colorTwo px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-[#ffffff] dark:hover:text-white/75"
                  href="Register"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
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
      </div>
    </header>
  );
};

export default NavBar;
