"use client"

import * as React from "react"
import {
    Fingerprint,
    Home,
    Navigation,
} from "lucide-react"

import {FaReact} from "react-icons/fa6";
import {FaVuejs} from "react-icons/fa";


import {NavLanguages} from "@/components/nav-languages"

import {
    Sidebar,
    SidebarContent,
    SidebarRail,
} from "@/components/ui/sidebar"
import {NavWebsite} from "@/components/nav-website";
import {RiNextjsFill} from "react-icons/ri";


// This is sample data.
const data = {
    navLanguages: [
        {
            title: "Nextjs",
            url: "/docs/nextjs",
            icon: RiNextjsFill,
            isActive: true,
            items: [
                {
                    title: "Installation",
                    url: "/docs/nextjs/installation",
                },
            ],
        },
        {
            title: "Reactjs",
            url: "/docs/reactjs",
            icon: FaReact,
            items: [
                {
                    title: "Installation",
                    url: "/docs/reactjs/installation",
                },
            ],
        },
        {
            title: "Vuejs",
            url: "/docs/vuejs",
            icon: FaVuejs,
            items: [
                {
                    title: "Installation",
                    url: "/docs/reactjs/installation",
                },
            ],
        }
    ],
    navigation: [
        {
            title: "Navigation",
            url: "#",
            icon: Navigation,
            isActive: true,
            items: [
                {
                    title: "Home",
                    url: "/",
                    icon: Home
                },
                {
                    title: "About",
                    url: "/about",
                    icon: Fingerprint
                },
            ],
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <NavLanguages items={data.navLanguages}/>
                <NavWebsite items={data.navigation}/>
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    )
}
