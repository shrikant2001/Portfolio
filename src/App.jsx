import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Skills from './Components/Skills';
import Exp from './Components/Exp';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      
      {/* Main */}
      <Main/>
      
      {/* Skills */}
      <Skills/>

      {/* Education and expirience */}
      <Exp/>

      {/* Projects */}
      <Projects/>
      

      {/* contact */}
      <Contact/>
    </div>
  );
}

export default App;
