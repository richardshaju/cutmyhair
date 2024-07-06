'use client';
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
        <>
        {!noHeaderRoutes.includes(pathname) && <Header />} 
        <Box
            sx={{
              marginTop: pathname === "/" ? "100px" : "75px",
              minHeight: "89.4vh",
            }}
          >
            {children}
          </Box>
        </> 
      </body>
    </html>
  );
}
