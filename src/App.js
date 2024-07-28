import Navbar from './Navbar';
import Home from './pages/home';
import Terrain from './pages/terrain';
import Troops from './pages/troops';
import Scenarios from './pages/scenarios';
import Tactics from './pages/tactics';
import Abacus from './pages/abacus';
import { Route, Routes } from 'react-router-dom'
import Post from './pages/post';
import ScrollToTop from './ScrollToTop';
import Actions from './pages/actions';
import TerrainPost from './pages/terrainPost';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrain" element={<Terrain />} />
          <Route path="/troops" element={<Troops />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/tactics" element={<Tactics />} />
          <Route path="/abacus" element={<Abacus />} />
          <Route path="/terrain/terraincard/:id" element={<TerrainPost />} />
          <Route path="/troops/troopcard/:id" element={<Post />} />
          <Route path="/actions/actioncard/:id" element={<Post />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

