import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {NavBar} from './NavBar';
import {Hero} from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Assets/pmdp-logo.png';
import {WakeUpWorld} from './WakeUpWorld';
import {MileHigh} from './MileHigh';
import {SaffronWood} from './SaffronWood';
import {HauteProvence} from './HauteProvence';
import {GardensOfIndia} from './GardensOfIndia';
import {PapyrusOud} from './PapyrusOud';
import {OrrisTattoo} from './OrrisTattoo';
import {ChypreMojo} from './ChypreMojo';
import {UneTonneDeRoses} from './UneTonneDeRoses';
import {GuimauveDeNoel} from './GuimauveDeNoel';
import {FlaviaVanilla} from './FlaviaVanilla';
import {TotallyWhite} from './TotallyWhite';
import {CedarWoodpecker} from './CedarWoodpecker';
import {MilkyMusk} from './MilkyMusk';
import {TomboyNeroli} from './TomboyNeroli';
import {WoodyPerfecto} from './WoodyPerfecto';
import {Concept} from './Concept';




function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to='/'>
          <div className="logo-container">
            <img className="logo" src={logo} alt=""></img>  
          </div>
        </NavLink>
        <NavBar />
        <Routes>   
          <Route path="/" element={<Hero />} />
          <Route path="/wake-up-world" element={<WakeUpWorld />} />
          <Route path='/mile-high-38' element={<MileHigh />} />
          <Route path='/saffron-wood-91' element={<SaffronWood />} />
          <Route path='/haute-provence-89' element={<HauteProvence />} />
          <Route path='/gardens-of-india-79' element={<GardensOfIndia />} />
          <Route path='/papyrus-oud-71' element={<PapyrusOud />} />
          <Route path='/orris-tattoo-29' element={<OrrisTattoo />} />
          <Route path='/chypre-mojo-45' element={<ChypreMojo />} />
          <Route path='/une-tonne-de-roses-8' element={<UneTonneDeRoses />} />
          <Route path='/guimauve-de-noel-31' element={<GuimauveDeNoel />} />
          <Route path='/flavia-vanilla-82' element={<FlaviaVanilla />} />
          <Route path='/totally-white-126' element={<TotallyWhite />} />
          <Route path='/cedar-woodpecker-10' element={<CedarWoodpecker />} />
          <Route path='/milky-musk-39' element={<MilkyMusk />} />
          <Route path='/tomboy-neroli-65' element={<TomboyNeroli />} />
          <Route path='/woody-perfecto-107' element={<WoodyPerfecto />} />
          <Route path='/concept' element={<Concept />} />
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
