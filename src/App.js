import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import './App.css';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Toggle from './components/Leftbar/Toggle';



function App() {
  return (
    <div className="App">
     <Toggle/>
      
      
     

      <Rightbar/>
    </div>
  );
}

export default App;
