import type { Metadata } from "next";
import "./globals.css";
import { Navigator } from "./_components/navigation";
import { Header } from "./_components/header";
import { ThemeProvider } from "./_components/theme-mode/ThemeProvider";
import { siteMetadata } from "@/data";
import { Roboto_Mono, Ubuntu } from "next/font/google";

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
          <div className="h-screen w-screen p-4 lg:p-8">
            <div className="relative flex h-full w-full flex-col overflow-scroll border border-primary p-4 scrollbar-hide lg:flex-row lg:p-8">
              <div className="flex w-full flex-row justify-between lg:w-fit lg:flex-col lg:justify-start">
                <Header />
                <Navigator />
              </div>
              <div className="flex flex-[1] items-start justify-end lg:items-end">
                <div className="flex h-full w-full items-end justify-end">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
