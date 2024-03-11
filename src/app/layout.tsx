import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import AppWithProvider from "@/components/app/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Movie App',
    default: 'Movie App',
  },
  description: 'Technical test for BeMaster. A movie web app with some categories',
  applicationName: 'MovieApp',
  keywords: ["movies", "a24", "hbo", "universal", "companies", "paramount", "discover", "popular", "top rated"],
  //robots: "https://pokelogue.vercel.app/",
  authors: [{ name: "Stiven Tovar", url: "https://github.com/StivenTC" }],
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWithProvider>
          {children}
        </AppWithProvider>
      </body>
    </html>
  );
}
