import { useRef, RefObject } from 'react';

import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import './App.css' 


function App() {

  // Create refs for each section
  const contentRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define sections with their title and ref
  const sections = [
    { title: 'About', ref: contentRef },
    { title: 'Skills', ref: skillsRef },
    { title: 'Projects', ref: projectsRef },
    { title: 'Experience', ref: workExperienceRef },
  ];

  return (
    <>
      <Navbar sections={sections} scrollToSection={scrollToSection} />

      <div className="min-h-screen px-4">

        <div ref={contentRef}>
          <Content />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <div ref={workExperienceRef}>
          <WorkExperience />
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
