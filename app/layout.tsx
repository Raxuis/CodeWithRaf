import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";
import {CSSProperties, ReactNode} from "react";
import {ViewTransitions} from "next-view-transitions";
import {BlurHeader} from "@/components/Header";
import {AppSidebar} from "@/components/app-sidebar";
import {SidebarProvider} from "@/components/ui/sidebar";

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
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "19rem",
                    } as CSSProperties
                }
            >
                <AppSidebar/>
                <div className="relative flex flex-col min-h-dvh bg-background items-center justify-center w-full">
                    <BlurHeader/>
                    <main className="flex-1 pt-14">
                        {children}
                    </main>
                </div>
            </SidebarProvider>
            </body>
            </html>
        </ViewTransitions>
    );
}
