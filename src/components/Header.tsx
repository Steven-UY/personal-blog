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
        <nav className = "text-card-foreground shadow-md bg-transparent">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href={`/`}>
                    <h1 className="text-4xl font-bold cursor-pointer hover:underline">The Garbage Dump</h1> 
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer text-xl`}>About</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer text-xl`}>Blog</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer text-xl`}>Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}

export default Header