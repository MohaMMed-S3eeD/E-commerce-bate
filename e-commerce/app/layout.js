"use client";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";
import NavBar from "./component/header/NavBar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { CartContext } from "./(context)/CartContext";
import { useState } from "react";
const allertaStencil = Allerta_Stencil({
  weight: "400", // الخط ده عنده وزن واحد بس
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>

        <html lang="en">
          <body
            className={`${allertaStencil.variable} dark  antialiased`}
          >
            <NavBar />

            {children}
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
