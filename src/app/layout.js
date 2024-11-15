import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Work_Sans } from "next/font/google";
import {
  PORTFOLIO_TITLE,
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";

import "./styles.css";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
// TODO: add og:meta tags
export const metadata = {
  title: PORTFOLIO_TITLE,
  description: "Jack Gable's portfolio website",
  // <meta property="og:title" content="Your Page Title">
  // <meta property="og:description" content="Brief description">
  // <meta property="og:image" content="/some-image.png">
  // <meta property="og:url" content="/this-page.html">
  // <meta property="og:site_name" content="Your Site Name">
  // <meta name="twitter:card" content="summary_large_image">
  // <meta name="twitter:image:alt" content="image description"></meta>
};

function RootLayout({ children }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "dark";

  return (
    <html
      lang="en"
      className={work_sans.variable}
      data-color-theme={theme}
      style={theme === "dark" ? DARK_TOKENS : LIGHT_TOKENS}
    >
      <body>
        <Header initialTheme={theme} />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
