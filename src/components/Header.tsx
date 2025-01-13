import React from 'react'
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"

const Header = () => {
    return (
        <nav className = "text-card-foreground shadow-md">
            <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-44 flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
                <Link href={`/`}>
                    <h1 className="text-3xl sm:text-4xl font-bold cursor-pointer hover:underline">The Garbage Dump</h1> 
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/post/about" className={`${navigationMenuTriggerStyle()} cursor-pointer text-xl`}>
                                About
                            </Link>
                        </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}

export default Header