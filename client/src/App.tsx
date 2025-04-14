import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './pages/About';
import Subheader from './components/common/Subheader';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='min-h-screen w-full flex flex-col'>
    <Header/>
    <Subheader/>
      <div className='flex-1'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    <Footer/>
    </div>
  )
}

export default App
