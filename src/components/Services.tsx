import { motion } from 'framer-motion';
import { Sparkles, Sun, Zap, Droplet, Shield, Car, Sofa, Wind, Wrench, Palette } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Headlight Restoration',
    description: 'Crystal-clear headlights that improve visibility and aesthetics',
    color: 'from-yellow-500 to-orange-500',
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning for a showroom-fresh cabin',
    color: 'from-cyan-500 to-blue-500',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Zap,
    title: 'Engine Detailing',
    description: 'Professional engine bay cleaning and protection',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Palette,
    title: 'Paint Correction',
    description: 'Remove swirls and scratches for a mirror-like finish',
    color: 'from-green-500 to-teal-500',
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    icon: Wrench,
    title: 'Scratch & Dent Removal',
    description: 'Expert repair services to restore your vehicle',
    color: 'from-red-500 to-orange-500',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: Car,
    title: 'Caliper Restoration',
    description: 'Caliper cleaning and custom painting services',
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    icon: Sofa,
    title: 'Interior Valets',
    description: 'Complete interior cleaning and sanitization',
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: Shield,
    title: 'PPF & Ceramic Coating',
    description: 'Ultimate paint protection and hydrophobic coating',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Wind,
    title: 'Steaming',
    description: 'Chemical-free deep cleaning with high-pressure steam',
    color: 'from-teal-500 to-green-500',
    gradient: 'from-teal-500/20 to-green-500/20',
  },
  {
    icon: Droplet,
    title: 'Home Upholstery Cleaning',
    description: 'Professional cleaning for your home furniture',
    color: 'from-cyan-500 to-teal-500',
    gradient: 'from-cyan-500/20 to-teal-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⚡ Discounted up to 50%
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Professional detailing services tailored to your vehicle's needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <motion.a
                    href="https://wa.me/27715939032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Get Quote →
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How to Book Your Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white text-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Choose Service</h4>
              <p className="text-cyan-100">Select the detailing package that suits your needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white text-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Send Photos</h4>
              <p className="text-cyan-100">Share photos via WhatsApp for accurate quote</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white text-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Confirm Details</h4>
              <p className="text-cyan-100">Set your preferred location and appointment time</p>
            </div>
          </div>
          <motion.a
            href="https://wa.me/27715939032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Book Now via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
