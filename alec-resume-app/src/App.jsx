import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { resumeData } from './data/resume';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero data={resumeData} />
      <Projects data={resumeData} />
      <Skills data={resumeData} />
      <Experience data={resumeData} />
      <Footer data={resumeData} />
    </div>
  )
}

export default App
