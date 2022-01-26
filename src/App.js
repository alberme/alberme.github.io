import './App.css';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Stack className="vh-100" direction="vertical" gap={0}>
          <HeaderNav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          <Footer />
        </Stack>
      </HashRouter>
    </div>
  );
}

export default App;
