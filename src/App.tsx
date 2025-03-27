import Navbar from './components/Navbar'
import Content from './components/Content'
import './App.css'


function App() {

  return (
    <div className="min-h-screen"> {/* Add this wrapper */}
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App
