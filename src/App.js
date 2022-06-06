import Home from './components/Home';
import About from './components/About';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
