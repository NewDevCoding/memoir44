import Navbar from './Navbar';
import Home from './pages/home';
import Terrain from './pages/terrain';
import Troops from './pages/troops';
import Scenarios from './pages/scenarios';
import Tactics from './pages/tactics';
import Abacus from './pages/abacus';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrain" element={<Terrain />} />
          <Route path="/troope" element={<Troops />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/tactics" element={<Tactics />} />
          <Route path="/abacus" element={<Abacus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

