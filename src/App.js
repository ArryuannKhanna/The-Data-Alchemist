import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import Myblog from './Myblog/Myblog';
import Contact from './Contact/contact';
import About from './About/About';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/myblog" element={<Myblog/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    
  );
}

export default App;
