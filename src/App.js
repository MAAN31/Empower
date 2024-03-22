import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            {/* <OurTeam /> */}
            <ContactUs />
            <Newsletter />
            {/* Define other routes that you need*/}
          
    </div>
  );
}

export default App;
