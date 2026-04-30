import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


// ✅ Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// ✅ Metadata
export const metadata: Metadata = {
  title: "Jayarani College Salem",
  description: "Arts & Science College for Women",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  // const pathname = usePathname();

  // const hideLayout = ["/login", "/dashboard"].includes(pathname);


  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans w-screen overflow-x-hidden">
        
        <ScrollToTop />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}