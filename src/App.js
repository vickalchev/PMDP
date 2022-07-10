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
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
