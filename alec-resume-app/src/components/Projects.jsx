import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            GenAI Projects & Rapid Prototypes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From idea to deployed in days, not weeks. Here's how I use AI-first development 
            to ship real products that users love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Secret? AI-First Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every project above was built using modern GenAI tools like Replit, Claude Code, 
              and Cursor. This isn't just about coding faster—it's about thinking differently. 
              I prototype ideas in hours, validate with users in days, and ship working products 
              while traditional teams are still in planning meetings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;