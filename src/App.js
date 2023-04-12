import './App.css';
import { Footer } from './Components/Footer';
import { Nav } from './Components/Nav';
import { Shipping } from './Components/Shipping';

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
