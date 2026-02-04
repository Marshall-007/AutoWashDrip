import { motion } from 'framer-motion';
import { Droplet, Instagram, Facebook, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="w-8 h-8 text-cyan-400" fill="currentColor" />
              <div>
                <h3 className="text-2xl font-bold">AutoDrip</h3>
                <p className="text-xs text-cyan-400">It's in the detail</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional mobile car wash and detailing service in Johannesburg. We bring the showroom shine to you.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/autodrip__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/AutoDrip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@autodrip2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Headlight Restoration</li>
              <li>Interior Detailing</li>
              <li>Engine Detailing</li>
              <li>Paint Correction</li>
              <li>Scratch & Dent Removal</li>
              <li>Ceramic Coating</li>
              <li>PPF Installation</li>
              <li>Interior Valets</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+27715939032"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  071 593 9032
                </a>
              </li>
              <li>
                <a
                  href="mailto:infoautodrip@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  infoautodrip@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                South of Johannesburg
              </li>
              <li className="text-cyan-400 text-sm font-semibold">
                By Appointment Only
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AutoDrip. All rights reserved. Crafted with passion for automotive excellence.
            </p>
            <motion.a
              href="https://wa.me/27715939032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
