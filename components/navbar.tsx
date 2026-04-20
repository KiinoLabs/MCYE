'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Programs', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center flex-shrink-0">
            <Image
              src="/mcye-logo-Photoroom.png"
              alt="MCYE Logo"
              width={220}
              height={110}
              className="h-36 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-[#1E5AA8] font-medium text-sm transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E5AA8] to-[#4FA64E] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Button className="bg-[#F4A62A] hover:bg-[#E69620] text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#1E5AA8]" />
            ) : (
              <Menu size={24} className="text-[#1E5AA8]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white animate-fade-in">
            <div className="flex flex-col gap-2 py-4 px-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#1E5AA8] hover:to-[#4FA64E] font-medium text-base rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mx-2 mt-2 bg-[#F4A62A] hover:bg-[#E69620] text-gray-900 font-semibold py-2 rounded-full">
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
