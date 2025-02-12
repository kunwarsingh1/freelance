import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Flag, Globe } from 'lucide-react';
import { TestimonialCarousel } from '../components/Carousel';
import { Typewriter } from "react-simple-typewriter";



const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mellissa Christine",
      image: "/api/placeholder/96/96",
      text: "Great work I got a lot more than what I ordered, they are very legitimas and catchy. I went for one of them for my brand but is always better to have more options."
    },
    {
      id: 2,
      name: "John Smith",
      image: "/api/placeholder/96/96",
      text: "The team delivered exceptional results. Their attention to detail and creativity exceeded our expectations."
    },
  ];

  // Animation variants for staggered fade-in effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16"
    >
      {/* Hero Section */}
      <motion.section 
        variants={itemVariants}
        className="relative h-full flex items-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full  inset-0 z-0"
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>
      </motion.section>

      {/* Services Preview */}
      <motion.section 
        variants={itemVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4"><Typewriter
        words={["Our Services"]}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={3000}
      /></h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          >
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
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all  "
              >
                <motion.div 
                  className="mb-4 "
                  // whileHover={{ 
                  //   rotate: 360,
                  //   transition: { duration: 0.6 }
                  // }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      {/* <Typewriter
        words={["Hello, World!", "Welcome to my site!", "Enjoy your stay!"]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      /> */}
      <motion.section 
        variants={itemVariants}
        className="py-20 bg-[#008080] text-white"
      >
        <motion.div 
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients" },
              { number: "500+", label: "Projects" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-[#F5F5F5] text-3xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.8,
                      delay: index * 0.1 
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#F5F5F5]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Home;