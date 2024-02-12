import { Footer } from 'flowbite-react'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
// import Top from './Top'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Products from './components/Products'
import Services from './components/Services'

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <Services/>
        <About/>
        <Products/>
        <Blog/>
        <Footer/>
    </>
  )
}

export default App
