// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componenets/Home';
import QrGenerator from './Componenets/QRGenerator';
import QrCodeReader from './Componenets/QRScanner';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/generate" element={<QrGenerator />} />
          <Route path="/scan" element={<QrCodeReader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
