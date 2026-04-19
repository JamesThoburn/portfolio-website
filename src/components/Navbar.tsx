"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
    // Tracks whether the dropdown menu is open (for small screen devices)
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <header
            className="fixed top-2 left-2 right-2 z-50 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm max-w-lg 
        mx-auto flex items-center justify-between border-gray-200 border-1 rounded-full"
        >
            <Link href="/" className="p-2 flex gap-2 items-center rounded-l-full">
                <Image
                    src="/James.jpg"
                    alt="James Thoburn"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <span className="font-medium">James Thoburn</span>
            </Link>
            <nav className="relative p-4">
                <ul className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={`hover:underline ${link.href === pathname && "font-semibold"}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className="flex md:hidden hover:cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Dropdown Menu */}
                {open && (
                    <div className="absolute mt-6 right-0 w-40 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm border-gray-200 border-1 rounded-xl md:hidden p-2 shadow-md">
                        <ul className="flex flex-col gap-6">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}
