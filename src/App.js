import './App.css';
import Home from './components/Home';
import About from './components/About';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
