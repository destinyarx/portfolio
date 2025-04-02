import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import './App.css'


function App() {

  return (
    <div className="min-h-screen px-4">
      <Navbar/>
      <Content/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
