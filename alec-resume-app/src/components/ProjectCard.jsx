import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-primary-600 font-medium">
              {project.subtitle}
            </p>
          </div>
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 45 : 0 }}
            className="w-6 h-6 text-gray-400"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <AnimatePresence>
          {(isHovered || isExpanded) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  ⚡ {project.buildTime}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-t pt-4 mt-4 space-y-4"
            >
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solved</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.details.problem}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.details.impact}
                </p>
              </div>

              {project.details.link && (
                <div className="pt-2">
                  <a
                    href={project.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;