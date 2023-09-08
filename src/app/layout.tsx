import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import CommandContextWrapper from "@/components/CommandsContext";
import Terminal from "@/components/Terminal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federico Targa",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex flex-col h-screen w-screen bg-black p-6"
        )}
      >
        <CommandContextWrapper>
          <Terminal>{children}</Terminal>
        </CommandContextWrapper>
      </body>
    </html>
  );
}
