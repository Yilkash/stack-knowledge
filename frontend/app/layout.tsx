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
/* Activity Surge 26: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 28: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 35: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 37: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 41: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 47: Wed 20 May 2026 06:05:04 WAT */
/* Day 11 Polish Pass 1: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 2: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 5: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 10: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 16: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 18: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 19: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 36: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 43: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 47: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 48: Thu 21 May 2026 06:28:18 WAT */
/* Day 12 Polish Pass 2: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 3: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 5: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 7: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 9: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 21: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 24: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 27: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 28: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 31: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 35: Fri 22 May 2026 07:24:45 WAT */
