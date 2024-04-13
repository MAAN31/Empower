import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Portfolio from './Components/Portfolio';
import OurPortfolio from './Page/OurPortfolio';
import { PortfolioContent } from './Components/PortfolioContent';
import { CraftingSolution } from './Components/craftingSolution';
import {ProjectQuest} from './Components/ProjectQuest';
import Legacy from './Components/legacy';
import Contribution from './Components/OurTeamContributions';

const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Components/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const OurTeam = lazy(() => import("./Components/OurTeam"));
const Main = lazy(() => import("./Components/Main"));
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
                {/* <Portfolio/> */}
                {/* <Main/> */}
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
            <div className='App' >
              <Navbar/>
              <Portfolio/>
              <ProjectQuest/>
              <CraftingSolution/>
              <PortfolioContent/>
              <Legacy/>
              <Contribution/>

              
              <Footer />
            </div>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
