import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // ✅ Un-comment or add this line
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
