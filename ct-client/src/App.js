import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import History from './pages/History';
import Library from './pages/Library';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import '@fontsource/roboto/500.css';

function App() {
  return (
    
    <>
    <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/history' element={<History />} />
        <Route path='/library' element={<Library />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
