import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <div className="min-h-screen"> {/* Add this wrapper */}
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
