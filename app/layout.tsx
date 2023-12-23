import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dark } from '@clerk/themes'
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from 'sonner'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamelive",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="Gamelive-theme"
          >
              <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
