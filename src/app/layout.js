import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Foot from "@/components/Foot";
import Service from "@/components/Service/Service";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "  Docq",
  description: "Docq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Service />
        <Foot />
      </body>
    </html>
  );
}
