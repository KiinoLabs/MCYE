'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Reports', href: '#' },
]

const resources = [
  { name: 'Blog', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'FAQs', href: '#' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FA64E] rounded-full opacity-5 blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4A62A] rounded-full opacity-5 blur-3xl -ml-48"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-blue-400/20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-serif mb-2">Stay Connected</h3>
              <p className="text-blue-100 text-lg">Get updates on our latest initiatives and impact stories</p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder-white/50 rounded-lg"
              />
              <Button className="bg-[#F4A62A] hover:bg-[#E69620] text-gray-900 font-semibold rounded-lg px-6">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-2">
              <Image
                src="/mcye-logo.png"
                alt="MCYE Logo"
                width={150}
                height={75}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Lighting the path for children and youth through inclusive, evidence-based interventions.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#4FA64E] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#F4A62A] to-[#4FA64E]"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-[#F4A62A] transition-colors duration-300 font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4FA64E] mr-3 group-hover:bg-[#F4A62A]"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold relative pb-3">
              Resources
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#F4A62A] to-[#4FA64E]"></span>
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-blue-100 hover:text-[#F4A62A] transition-colors duration-300 font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4FA64E] mr-3 group-hover:bg-[#F4A62A]"></span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold relative pb-3">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#F4A62A] to-[#4FA64E]"></span>
            </h4>
            <div className="space-y-4 text-blue-100 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a
                  href="mailto:info@mcye.org"
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  info@mcye.org
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a
                  href="tel:+251911223344"
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  +251 (911) 223-344
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between">
            <div className="text-sm text-blue-100">
              <p>© {currentYear} MCYE. Lighting the path of children and youth.</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-100">
              
          
            </div>
            <div className="flex gap-6 md:justify-end text-sm">
              <a
                href="#"
                className="text-blue-100 hover:text-[#F4A62A] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-[#F4A62A] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
