import './App.css';
import { Footer } from './Components/Main/Footer';
import { Nav } from './Components/Main/Nav';
import { Shipping } from './Components/Main/Shipping';

function App() {
  return (
    <div className='App'>
        <Shipping/>
        <Nav/>
        <Footer/>
    </div>
  );
}

export default App;
