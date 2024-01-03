import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigator } from "./_components/navigation";
import { Header } from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen p-8">
          <div className="flex h-full w-full flex-col rounded-lg border border-black p-8">
            <div className="fixed z-50">
              <Header />
              <Navigator />
            </div>
            <div className="flex flex-1 items-end justify-end">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
