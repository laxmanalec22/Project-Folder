import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = ({ data }) => {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startup velocity to enterprise scale, always shipping fast and iterating faster.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

          <div className="space-y-12">
            {data.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredExperience(exp.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                  hoveredExperience === exp.id 
                    ? 'bg-primary-600 border-primary-600 scale-125' 
                    : 'bg-white border-primary-300'
                }`}></div>

                <div className="ml-20">
                  <motion.div
                    className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-300 ${
                      hoveredExperience === exp.id ? 'shadow-xl -translate-y-1' : ''
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-primary-600 font-semibold text-lg mb-2">
                          {exp.company}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {exp.period} • {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: hoveredExperience === exp.id ? 'auto' : '200px',
                        overflow: hoveredExperience === exp.id ? 'visible' : 'hidden'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0.7 }}
                            animate={{ 
                              opacity: hoveredExperience === exp.id ? 1 : 0.7 
                            }}
                            className="flex items-start gap-3 text-gray-600 leading-relaxed"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {hoveredExperience !== exp.id && exp.achievements.length > 3 && (
                      <div className="mt-4 text-center">
                        <span className="text-primary-600 text-sm font-medium">
                          Hover to see all {exp.achievements.length} achievements
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What I Bring
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">⚡ Speed</h4>
                <p className="text-gray-600 text-sm">
                  From idea to working prototype in days, not weeks, using GenAI tools
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">👥 User Obsession</h4>
                <p className="text-gray-600 text-sm">
                  Deep UX expertise ensures everything I build delights users
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">🤖 Modern Approach</h4>
                <p className="text-gray-600 text-sm">
                  Native to AI-powered development - this is how I've always built
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">🚀 Startup Mindset</h4>
                <p className="text-gray-600 text-sm">
                  Comfortable with ambiguity, rapid iteration, and shipping MVP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;