import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-mode/ThemeProvider";
import { siteMetadata } from "@/data";
import { Roboto_Mono, Ubuntu } from "next/font/google";
import { MainLayout } from "./_components/layout";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const nanum_pen_script = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language}>
      <body className={`${ubuntu.className} ${nanum_pen_script.className}`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
