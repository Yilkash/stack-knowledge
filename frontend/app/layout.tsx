import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import ToastContainer from "@/components/ToastContainer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": APP_NAME,
    "description": APP_DESCRIPTION,
    "url": "https://stackknowledge.org", // Hypothetical production URL
    "applicationCategory": "EducationApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "STX"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            {children}
            <ToastContainer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
/* Activity Surge 1: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 5: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 8: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 9: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 18: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 22: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 24: Wed 20 May 2026 06:05:04 WAT */
