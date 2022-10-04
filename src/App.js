import './App.css';
import Contact from './Components/Contact/Contact';
import Info from './Components/Info/Info';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Info/>

      <Contact/>
      
    </div>
  );
}

export default App;
