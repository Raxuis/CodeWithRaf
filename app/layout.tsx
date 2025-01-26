import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import { BlurHeader } from "@/components/Header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "@/Layout";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWithRaf",
  description:
    "CodeWithRaf is a blog where I share insights and experiences across different programming languages, exploring new technologies and coding tips.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="scroll-pt-[3.5rem]">
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            inter.variable,
            jetbrainsMono.variable,
          )}
        >
          <SidebarProvider>
            <AppSidebar />
            <Layout>
              <BlurHeader />
              <main className="px-5 pt-14">{children}</main>
            </Layout>
          </SidebarProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
