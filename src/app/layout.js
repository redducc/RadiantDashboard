import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RadiantAI",
  description: "Revolutionising University learning with personalized academic support. Tailored Large Language Models offer instant, course-specific assistance through an intuitive app. A collaborative platform for students to explore, engage, and excel academically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
