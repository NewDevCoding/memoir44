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
          <Route path="/" elemet={<Home />} />
          <Route path="/terrain" elemet={<Terrain />} />
          <Route path="/troope" elemet={<Troops />} />
          <Route path="/scenarios" elemet={<Scenarios />} />
          <Route path="/tactics" elemet={<Tactics />} />
          <Route path="/abacus" elemet={<Abacus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

