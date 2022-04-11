import './App.css';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { StackLayout, StackMain } from './components/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <StackLayout>
          <HeaderNav />
          <StackMain>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </StackMain>
          <Footer />
        </StackLayout>
      </HashRouter>
    </div>
  );
}

export default App;
