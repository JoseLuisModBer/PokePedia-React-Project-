import './App.css';

/* Importo Routes y Route para poder establecer las rutas personalizadas a los componentes */
import { Route, Routes } from 'react-router-dom';
/* Importo mis componentes principales */
import { Header } from './components/1Header/Header';
import { PokePedia } from './components/1PokePedia/PokePedia';
import { Instructions } from './components/1Instructions/Instructions';
import { Footer } from './components/1Footer/Footer';

export function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<PokePedia />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="*" element={<PokePedia />} />
      </Routes>

      <Footer />
    </div>
  );
}
