import { Navbar } from './components/navbar/Navbar';
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
