import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>

      <nav style={{ background: '#000', padding: '1rem' }}>
        <Link to="/" style={{ color: '#ae09e5ff', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Filmarium 
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
