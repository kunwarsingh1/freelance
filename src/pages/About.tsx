import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Feather, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Literary Excellence",
      description: "We're dedicated to publishing exceptional works that inspire and enlighten readers."
    },
    {
      icon: <Feather className="h-8 w-8" />,
      title: "Author Support",
      description: "We nurture and support our authors throughout their creative journey."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "We maintain the highest standards in editing, design, and production."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We foster a vibrant community of readers, writers, and literary enthusiasts."
    }
  ];

  const team = [
    {
      name: "Elizabeth Morgan",
      role: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    },
    {
      name: "James Harrison",
      role: "Publishing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Sofia Rodriguez",
      role: "Literary Agent",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#008080] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Novella Press</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Crafting stories that inspire, educate, and transform lives since 1985.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1985, Novella Press began as a small independent publisher with a passion for extraordinary storytelling. Our journey started with a simple mission: to bring remarkable stories to readers worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Over the decades, we've published thousands of titles across various genres, from award-winning fiction to groundbreaking non-fiction. Our commitment to literary excellence has helped us discover and nurture some of the most compelling voices in contemporary literature.
              </p>
              <p className="text-gray-600">
                Today, we continue to champion both established and emerging authors, maintaining our dedication to quality while embracing modern publishing innovations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
                alt="Library Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our publishing house</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-[#008080] mb-4 inline-block">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Editorial Team</h2>
            <p className="text-xl text-gray-600">Meet the people who bring stories to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;