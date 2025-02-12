import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs using cutting-edge technologies.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: <Smartphone />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps"]
    },
    {
      icon: <Globe />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy"]
    },
    {
      icon: <Database />,
      title: "Database Solutions",
      description: "Robust database design and management for your business needs.",
      features: ["Database Design", "Data Migration", "Performance Optimization"]
    },
    {
      icon: <Cloud />,
      title: "Cloud Services",
      description: "Scalable cloud solutions and infrastructure management.",
      features: ["Cloud Migration", "AWS Services", "Azure Solutions"]
    },
    {
      icon: <Lock />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Security Training"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#008080]  text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed in the modern world.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-[#008080] mb-4">
                  {React.cloneElement(service.icon, { className: "h-12 w-12" })}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-[#008080] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#008080] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how we can help your business grow.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#008080] text-white px-8 py-3 rounded-lg hover:bg-[#006666] transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;