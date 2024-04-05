import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Bootstrap from "@/components/Bootstrap";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All India Presseditors Associations",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>
      <Bootstrap />
        {children}
        </body>
    </html>
  );
}
