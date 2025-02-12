import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Carousel } from '../components/Carousel';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0 ">
          <Carousel  />
          <div className="absolute  inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Innovate. Create. Transform.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            We build cutting-edge digital solutions that help businesses thrive in the modern world.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-[#008080] text-[#008080] hover:bg-blue-500 hover:text-white transition-colors rounded-lg text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12 text-[#008080]" />,
                title: "Web Development",
                description: "Custom websites and web applications built with the latest technologies."
              },
              {
                icon: <Globe className="h-12 w-12 text-[#008080]" />,
                title: "Digital Marketing",
                description: "Strategic marketing solutions to grow your online presence."
              },
              {
                icon: <Cpu className="h-12 w-12 text-[#008080]" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and management services."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients" },
              { number: "500+", label: "Projects" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#F5F5F5] font-bold mb-2">{stat.number}</div>
                <div className="text-[#F5F5F5]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;