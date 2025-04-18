import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './pages/About';
import Subheader from './components/common/Subheader';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Provider as JotaiProvider } from 'jotai';
import Create from './pages/Create';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <JotaiProvider>
        <Header/>
        <Subheader/>
          <div className='flex-1'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/new" element={<Create/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </div>
        <Footer/>
      </JotaiProvider>
    </div>
  )
}

export default App
