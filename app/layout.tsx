import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProvider from "../components/providers/RootProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget App",
  description: "Wale did this",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<ClerkProvider>

    <html className="dark" lang="en" 
    style={{
      colorScheme: "dark"
    }}
    >
      <body className={inter.className}>
        <RootProvider>

        {children}
        </RootProvider>
        </body>
    </html>
</ClerkProvider>
  );
}
