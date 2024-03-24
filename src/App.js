import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Hero';
import AboutUs from './Components/AboutUs';
import OurMission from './Components/OurMission';
// import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import Newsletter from './Components/Newsletter';
import ResourceHub from './Page/ResourceHub';


function App() {
  return (
    <div className="App">
            <Navbar/>
            <Home />
            <ResourceHub/>
            <OurMission />
            <AboutUs /> 
            <ContactUs />
            <Newsletter />
    </div>
  );
}

export default App;
