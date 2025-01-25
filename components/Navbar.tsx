"use client";

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <nav className="flexBetween max-container padding-container fixed top-0 left-0 right-0 z-30 py-5 bg-white/70 backdrop-blur-md shadow-md">

        <Link href="#hero">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>

        <div className="lg:flexCenter hidden">
            <Button 
               type="button"
               title="Login"
               icon="/user.svg"
               variant="btn_dark_green"
            />
        </div>

        <div className="lg:hidden">
            <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
        </div>

        {isMenuOpen && (
            <div className="absolute top-16 right-0 w-full bg-white shadow-md flex flex-col items-center py-5 lg:hidden">
                {NAV_LINKS.map((link) => (
                    <Link 
                    key={link.key} 
                    href={link.href} 
                    className="block py-2 text-gray-700 text-lg"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
        )}
        
    </nav>
  )
}

export default Navbar;
