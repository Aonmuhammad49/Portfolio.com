// app/layout.tsx (Root Layout)
import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "../Components/Home/Navbar/ResponsiveNav"; // Navbar import
import AnimatedCursor from "react-animated-cursor";
import 'aos/dist/aos.css';

// Fallback font configuration without next/font/google to avoid Turbopack issues
const fontStyle = {
  fontFamily: '"Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="custom-scroll">
      <head>
        {/* Manually include Google Fonts via link tag as a fallback */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={fontStyle}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav /> {/* Navbar */}
        {children} {/* Page-specific content goes here */} {/* Footer - Automatically included here */}
      </body>
    </html>
  );
}