import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'SwiftCut Barbershop',
  description: 'Black-owned barbershop and braiding salon in Kennesaw, GA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800 antialiased">
        <header className="bg-gray-950 text-white py-4 px-6 flex items-center justify-between sticky top-0 z-10 shadow-lg">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-red-400 transition-colors"
          >
            SwiftCut Barbershop
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-red-400 transition-colors">
                  Book
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-950 text-gray-400 text-sm">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-white font-bold text-base mb-2">SwiftCut Barbershop</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Black-owned barbershop and braiding salon. Community first, always.
              </p>
              <div className="flex gap-4 text-xs text-gray-500">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" aria-label="TikTok" className="hover:text-white transition-colors">
                  TikTok
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
                Hours
              </h3>
              <ul className="space-y-1 text-xs">
                <li>Tue–Fri: 10 AM – 7 PM</li>
                <li>Saturday: 9 AM – 6 PM</li>
                <li>Sunday: 11 AM – 4 PM</li>
                <li>Monday: Closed</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services &amp; Prices
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-white transition-colors">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
                Contact
              </h3>
              <address className="not-italic text-xs space-y-1">
                <p>4810 Wade Green Rd #10</p>
                <p>Kennesaw, GA 30144</p>
                <p className="mt-2">678-903-5928</p>
                <p>swiftcuts1987@gmail.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 text-center py-4 px-6 text-xs text-gray-600">
            &copy; 2024 SwiftCut Barbershop &middot; All rights reserved
          </div>
        </footer>
      </body>
    </html>
  )
}
