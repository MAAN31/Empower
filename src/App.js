import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Hero';
import AboutUs from './Components/AboutUs';
import OurMission from './Components/OurMission';
import OurTeam from './Components/OurTeam';
// import {ContactUs} from './Components/ContactUs';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
            <Navbar/>
            <Home />
            <AboutUs /> 
            <OurMission />
            <OurTeam />
            {/* <ContactUs /> */}
            <Newsletter />
            <Footer />
            {/* Define other routes that you need*/}
          
    </div>
  );
}

export default App;
