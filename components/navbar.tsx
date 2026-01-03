"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/white-20and-20dark-20green-20minimalist-20recycle-20logo-20-281-29.png"
            alt="ECO RECYCLING & INJECTION METAL Logo"
            width={60}
            height={60}
            className="transition-transform group-hover:scale-110"
          />
          <div className="flex flex-col">
            <span className="font-bold text-brand-green text-sm leading-tight uppercase tracking-wider">
              Eco Recycling &
            </span>
            <span className="font-bold text-brand-green text-sm leading-tight uppercase tracking-wider">
              Injection Metal
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-green",
                pathname === link.href
                  ? "text-brand-green border-b-2 border-brand-green pb-1"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:flex items-center justify-center h-10 px-6 font-medium text-sm text-white bg-brand-green rounded-full hover:bg-brand-green/90 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  )
}
