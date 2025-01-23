import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";
import {ReactNode} from "react";
import {ViewTransitions} from "next-view-transitions";
import {BlurHeader} from "@/components/Header";

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
    description: "Code with Raf is a blog where I share insights and experiences across different programming languages, exploring new technologies and coding tips.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, jetbrainsMono.variable)}
            >
            <div className="relative flex flex-col min-h-dvh bg-background">
                <BlurHeader/>
                <main className="flex-1 mt-10">
                    {children}
                </main>
            </div>
            </body>
            </html>
        </ViewTransitions>
    );
}
