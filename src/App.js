import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Hero';
import AboutUs from './Components/AboutUs';
import OurMission from './Components/OurMission';
// import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import Newsletter from './Components/Newsletter';
import { GeminiEffect } from './Components/ui/geminiEffect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes/>
        <Route path="/" element={<Home />} />
        <Route path="/OurMission" element={<OurMission />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/ResourceHub" element={<ResourceHub />} />
        <Route
            path="/GeminiEffect"
            element={<GeminiEffect pathLengths={[]} title="Title" description="Description" className="ClassName" />}
          />
      </Router>
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
