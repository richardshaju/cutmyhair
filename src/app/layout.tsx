"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderRoutes = ["/signup", "/login"];

  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <>{children}</>
      </body>
    </html>
  );
}
