import { motion } from 'framer-motion';
import { Award, Heart, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About AutoDrip
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              AutoDrip is a professional mobile car wash and detailing service based in the south of Johannesburg.
              Whether you come to us or we come to you, we offer top-quality care for car enthusiasts who take
              pride in their vehicles.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our team of certified detailers brings years of experience and passion for automotive excellence.
              We use only premium products and cutting-edge techniques to ensure your vehicle receives the care
              it deserves. From basic maintenance to full restoration, we treat every car as if it were our own.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Professional</h3>
                <p className="text-gray-400 text-sm">Certified detailers with years of experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Heart className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Passionate</h3>
                <p className="text-gray-400 text-sm">We love cars as much as you do</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Shield className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Reliable</h3>
                <p className="text-gray-400 text-sm">Trusted by hundreds of clients</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <Zap className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Convenient</h3>
                <p className="text-gray-400 text-sm">Mobile service at your location</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="AutoDrip Detailing"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <p className="text-white text-lg font-semibold mb-2">
                    "It's in the detail"
                  </p>
                  <p className="text-cyan-400">
                    Every service is performed with meticulous attention to detail
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white text-center">
                <div className="text-4xl font-bold">150+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-slate-900 text-center">
                <div className="text-4xl font-bold">4.9★</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
