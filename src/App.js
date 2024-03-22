import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Hero';
import AboutUs from './Components/AboutUs';
import OurMission from './Components/OurMission';
// import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import Newsletter from './Components/Newsletter';


function App() {
  return (
    <div className="App">
            <Navbar/>
            <Home />
            <OurMission />
            <AboutUs /> 
            <ContactUs />
            <Newsletter />
    </div>
  );
}

export default App;
