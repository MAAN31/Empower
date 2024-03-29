import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Components/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const OurTeam = lazy(() => import("./Components/OurTeam"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const OurMission = lazy(() => import("./Components/OurMission"));
const ResourceHub = lazy(() => import("./Page/ResourceHub"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div className='App'>
                <Navbar />
                <Home />
                <AboutUs />
                <OurMission />
                <OurTeam />
                <ContactUs />
                <Footer />
              </div>
            }
          />
          <Route path="/resource-hub" element={<ResourceHub />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
