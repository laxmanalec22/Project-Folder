import { motion } from 'framer-motion';

const Footer = ({ data }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Build Something Amazing?
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a
              href={`mailto:${data.personal.email}`}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href={`https://${data.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`https://${data.personal.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Portfolio
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6">Built With</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl">⚡</div>
                <h4 className="font-semibold">Replit</h4>
                <p className="text-gray-400 text-sm">
                  Rapid prototyping platform for instant deployment
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🤖</div>
                <h4 className="font-semibold">Claude Code</h4>
                <p className="text-gray-400 text-sm">
                  AI-powered development for faster iteration
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">⚛️</div>
                <h4 className="font-semibold">React + Tailwind</h4>
                <p className="text-gray-400 text-sm">
                  Modern frontend with smooth animations
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">
                This interactive resume was built in <strong>2 days</strong> using AI-first development. 
                From concept to deployment, demonstrating the speed and quality possible with modern GenAI tools.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="#"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Source Code
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="#"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-bold text-lg">{data.personal.name}</h4>
                <p className="text-gray-400 text-sm">{data.personal.title}</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  © 2024 • Built with 🤖 AI + ❤️ Design
                </p>
                <div className="text-xs text-gray-500 mt-1">
                  🤖 Generated with{' '}
                  <a 
                    href="https://claude.ai/code" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    Claude Code
                  </a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">Education</p>
                <p className="text-white font-medium">{data.education.school}</p>
                <p className="text-gray-400 text-xs">
                  {data.education.degree} • {data.education.honors} • GPA: {data.education.gpa}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;