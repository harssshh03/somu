import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import DisableInspect from "./DisableInspect";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Soumya Singh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased relative`}>
       <div className="border-x dark:border-neutral-700 w-5 lg:w-8 2xl:w-10 dark:bg-neutral-900 bg-white h-full absolute top-0 left-0 dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)] z-10" />
        <div className="border-x dark:border-neutral-700 w-5 lg:w-8 2xl:w-10 dark:bg-neutral-900 bg-white h-full absolute top-0 right-0 dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)] z-10" />
        <DisableInspect/>
        {children}
      </body>
    </html>
  );
}