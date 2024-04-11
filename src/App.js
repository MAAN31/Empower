import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PortfolioContent } from './Components/PortfolioContent';
import { CraftingSolution } from './Components/craftingSolution'; // Corrected component name


const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Components/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const OurTeam = lazy(() => import("./Components/OurTeam"));
const Main = lazy(() => import("./Components/Main"));
// const Portfolio = lazy(() => import("./Components/Portfolio"))
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
                <Main/>
                <Footer />
              </div>
            }
          />
          <Route path="/resource-hub" element={
            <div >
              <Navbar/>
              <ResourceHub/>
              <Footer />
            </div>
          } />
          <Route path="/OurPortfolio" element={
            <div className='App'> {/* Apply black background color here */}
              <Navbar/>
              <OurPortfolio/>
              <CraftingSolution/> {/* Corrected component name and JSX syntax */}
              <PortfolioContent />
              <Footer/>
            </div>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;