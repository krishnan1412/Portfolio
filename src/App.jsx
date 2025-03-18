
import './App.css'
import 'animate.css';
import { About } from './Component/About'
import { Contact } from './Component/Contact'
import { Footer } from './Component/Footer'
import { Header } from './Component/Header'
import { Hero } from './Component/Hero'
import { Project } from './Component/Project'
import { Resume } from './Component/Resume'

function App() {
  

  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
