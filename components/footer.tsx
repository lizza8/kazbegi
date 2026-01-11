import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Kazbegi Hideaway</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Experience the majesty of the Georgian mountains in comfort and style. Your perfect mountain retreat
              awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-muted-foreground hover:text-foreground transition-colors">
                  Location & Directions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+995 555 123 456</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@kazbegihideaway.ge</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Kazbegi, Mtskheta-Mtianeti, Georgia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Kazbegi Hideaway. All rights reserved. Book direct and save on
            commissions.
          </p>
        </div>
      </div>
    </footer>
  )
}
