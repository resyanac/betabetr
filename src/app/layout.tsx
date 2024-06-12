// Import React and necessary components
"use client";
import React, { ReactNode } from "react";
import "./globals.css"; // Import global styles
import { AuthContextProvider } from "@/context/AuthContext";

// Define props for RootLayout
interface RootLayoutProps {
  children: ReactNode; // Define children as ReactNode
}

// Define RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>{" "}
        {/* Wrap children with AuthContextProvider */}
      </body>
    </html>
  );
}
