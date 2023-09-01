import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Steps from './components/Steps';
import Menu from './components/Menu';
import Plan from './Plan';
import Testimony from './Testimony';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Steps />
      <Menu />
      <Plan />
      <Testimony />
      <About />
      <Footer />
    </div>
  );
}

export default App;
