import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Award, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>

      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          y,
          backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 md:right-20"
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <Star className="w-6 h-6 md:w-10 md:h-10 text-teal-400 opacity-50" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 200 
            }}
            className="inline-block mb-6"
          >
            <motion.div 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-4 h-4" />
                </motion.div>
                Premium Mobile Detailing
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Mobile Car Wash &
            </motion.span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Detailing in JHB
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              AutoDrip delivers professional detailing at your location.
            </motion.span>
            <br />
            <motion.span 
              className="text-cyan-400 font-semibold text-2xl sm:text-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              It's in the detail.
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="https://wa.me/27715939032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)',
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                  '0 0 40px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('services')}
              className="border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: Calendar, text: 'By Appointment Only', delay: 0 },
              { icon: MapPin, text: 'South of Johannesburg', delay: 0.1 },
              { icon: Award, text: 'Professional Results', delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + item.delay }}
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2 sm:mb-3 mx-auto" />
                </motion.div>
                <p className="text-white font-semibold text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('services')}
            className="focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
