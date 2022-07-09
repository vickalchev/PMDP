import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar} from './NavBar';
import {Hero} from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Assets/pmdp-logo.png';
import {WakeUpWorld} from './WakeUpWorld';




function App() {
  return (
    <div className="App">
      <div className="logo-container">
      <img className="logo" src={logo} alt=""></img>
      </div>
      <Router>
        <NavBar />
        <Routes>   
          <Route path="/" element={<Hero />} />
          <Route path="/wake-up-world" element={<WakeUpWorld />} />
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
