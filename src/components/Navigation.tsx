import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <Droplet className="w-8 h-8 text-cyan-400" fill="currentColor" />
            <div>
              <h1 className="text-2xl font-bold text-white">AutoDrip</h1>
              <p className="text-xs text-cyan-400 -mt-1">It's in the detail</p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
            <motion.a
              href="https://wa.me/27715939032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>

          <div className="md:hidden">
            <motion.a
              href="https://wa.me/27715939032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
