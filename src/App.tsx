import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import './App.css'


function App() {

  return (
    <div className="min-h-screen">
      <Navbar/>
      <Content/>
      <Skills/>
      <WorkExperience/>
      <Footer/>
    </div>
  )
}

export default App
