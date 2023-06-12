
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Artists from './pages/Artists';
import PrecheckList from './pages/PrecheckList';
import Aftercare from './pages/Aftercare';
import Faq from './pages/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/precheck-list' element={<PrecheckList />} />
        <Route path='/aftercare' element={<Aftercare />} />
        <Route path='/faq' element={<Faq />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
