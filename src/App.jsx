import './App.scss'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './pages/home'
import Footer from './components/Footer';

function App() {

  return (
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
