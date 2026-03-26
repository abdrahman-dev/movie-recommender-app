import './style/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();

  return (
    <main className="main-container">
      <NavBar />

      {/* key={location.pathname} re-mounts the div on route change,
          triggering the fadeUp animation on every navigation */}
      <div className="main-content" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </main>
  );
}

export default App