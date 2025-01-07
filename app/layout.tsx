import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Home/Navbar/Navbar";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "TechDev",
  description: "Learn and Learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <Navbar/>
            {children}
      </body>
    </html>
  );
}
