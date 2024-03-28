import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Hero';
// import AboutUs from './Components/AboutUs';
// import OurMission from './Components/OurMission';
// import OurTeam from './Components/OurTeam';
// import ContactUs from './Components/ContactUs';
// import Newsletter from './Components/Newsletter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';


const Navbar = lazy( ()=> import("./Components/Navbar"));
const Home = lazy( ()=> import("./Components/Hero"));
const AboutUs = lazy( ()=> import("./Components/AboutUs"));
const ContactUs = lazy( ()=> import("./Components/ContactUs"));
const OurMission = lazy( ()=> import("./Components/OurMission"));
const ResourceHub = lazy( ()=> import("./Page/ResourceHub"));



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='App'><Navbar/> <Home /> <OurMission /> <AboutUs /> <ContactUs /></div>}/>
        <Route path="/resource-hub" element={<ResourceHub/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //         <Navbar/>
    //         <Home />
    //         <ResourceHub/>
    //         <OurMission />
    //         <AboutUs /> 
    //         <ContactUs />
    //         <Newsletter />
    // </div>
  );
}

export default App;
