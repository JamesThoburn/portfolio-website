import Image from "next/image";
import Link from "next/link";

const links = [
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <header 
        className="fixed top-1 left-0 right-0 z-50 bg-[rgba(255,255,255,0.9)] max-w-lg 
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
        <nav className="p-4">
            <ul className="flex gap-6">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:underline">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
