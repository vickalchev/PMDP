import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavBar} from './NavBar';
import {Hero} from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Assets/pmdp-logo.png';




function App() {
  return (
    <div className="App">
      <div className="logo-container">
      <img className="logo" src={logo} alt=""></img>
      </div>
      <Router>
          <NavBar />
          <Hero />
                
      </Router>
    </div>
  );
}

export default App;
