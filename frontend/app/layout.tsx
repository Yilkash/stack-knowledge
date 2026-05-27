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
/* Day 12 Polish Pass 38: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 39: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 41: Fri 22 May 2026 07:24:45 WAT */
/* Day 13 Polish Pass 5: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 6: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 12: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 15: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 17: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 25: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 28: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 29: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 34: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 35: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 41: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 45: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 46: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 49: Sat 23 May 2026 07:13:18 WAT */
/* Day 14 Polish Pass 1: Sun 24 May 2026 06:42:39 WAT */
/* Day 14 Polish Pass 6: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 13: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 15: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 18: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 24: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 25: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 27: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 28: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 31: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 32: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 35: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 36: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 40: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 41: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 46: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 49: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 3: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 5: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 8: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 9: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 11: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 30: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 33: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 46: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 49: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 1: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 17: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 19: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 24: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 25: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 30: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 47: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 2: Wed May 27 05:24:43 WAT 2026 */
/* Day 14 Polish Pass 7: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 14: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 17: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 20: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 25: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 29: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 31: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 35: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 36: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 42: Wed May 27 05:24:44 WAT 2026 */
