import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-mode/ThemeProvider";
import { siteMetadata } from "@/data";
import { Nanum_Gothic_Coding, Roboto_Mono } from "next/font/google";
import { MainLayout } from "./_components/layout";

const nanum_pen_script = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const nanum_gothic_coding = Nanum_Gothic_Coding({
  display: "swap",
  subsets: ["latin"],
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
      <body
        className={`${nanum_pen_script.className} ${nanum_gothic_coding.className} `}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
