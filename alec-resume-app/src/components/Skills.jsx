import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = ({ data }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleSkillClick = (skillName, tools) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
      setFilteredProjects([]);
      return;
    }

    setSelectedSkill(skillName);
    
    // Filter projects that use any of the tools in this skill category
    const filtered = data.projects.filter(project =>
      project.tech.some(tech => 
        tools.some(tool => 
          tech.toLowerCase().includes(tool.toLowerCase()) ||
          tool.toLowerCase().includes(tech.toLowerCase())
        )
      )
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tools & Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Click any skill to see related projects. This is my AI-first toolkit for 
            rapid prototyping and shipping real products.
          </p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(data.skills).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.button
                    key={tool}
                    onClick={() => handleSkillClick(category, tools)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedSkill === category
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tool}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filtered Projects Display */}
        {selectedSkill && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-primary-900 mb-4">
                Projects using {selectedSkill}:
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <h5 className="font-semibold text-gray-900 mb-1">
                      {project.title}
                    </h5>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold text-gray-900 mb-2">Build in Public</h4>
                <p className="text-gray-600 text-sm">
                  Share progress, get feedback, iterate quickly
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-bold text-gray-900 mb-2">Fail Beautifully</h4>
                <p className="text-gray-600 text-sm">
                  Fast failures lead to faster success
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Deliver Magic</h4>
                <p className="text-gray-600 text-sm">
                  Every interaction should delight users
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;