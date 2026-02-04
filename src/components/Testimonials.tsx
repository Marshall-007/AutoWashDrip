import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Thabo Mkhize',
    location: 'Sandton, Johannesburg',
    rating: 5,
    text: "AutoDrip transformed my BMW. The paint correction was flawless and the ceramic coating makes it shine like it's brand new. Professional service from start to finish!",
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sarah van der Merwe',
    location: 'Alberton, Johannesburg',
    rating: 5,
    text: 'I was amazed by the interior detailing. My car had years of dirt and stains, but AutoDrip made it look showroom fresh. They came to my office - so convenient!',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Michael Naidoo',
    location: 'Lenasia, Johannesburg',
    rating: 5,
    text: 'The headlight restoration service is incredible. My foglights were completely yellow and now they look crystal clear. Highly recommend for anyone who takes pride in their vehicle.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Linda Botha',
    location: 'Krugersdorp, Johannesburg',
    rating: 5,
    text: "Best mobile detailing service I've ever used. The attention to detail is outstanding. My SUV's engine bay looks brand new and the paint is absolutely stunning.",
    image: 'https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'David Sithole',
    location: 'Soweto, Johannesburg',
    rating: 5,
    text: 'Professional, punctual, and perfectionist! AutoDrip exceeded my expectations. The scratch removal on my car door is seamless. You cannot even tell there was damage.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Zanele Dlamini',
    location: 'Johannesburg South',
    rating: 5,
    text: 'Absolutely worth every cent! The team was friendly, professional, and the results speak for themselves. My car has never looked this good. Will definitely be a regular customer.',
    image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied car enthusiasts across Johannesburg
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
            ⭐ 4.9/5 Average Rating from 150+ Reviews
          </div>
        </motion.div>
      </div>
    </section>
  );
}
