import { Navbar } from "react-bootstrap";
import Portfolio from "../Components/Portfolio";

import { PortfolioContent } from '../Components/PortfolioContent';
import { CraftingSolution } from '../Components/craftingSolution';
import {ProjectQuest} from '../Components/ProjectQuest';
import Legacy from '../Components/legacy';
import Contribution from '../Components/OurTeamContributions';


const OurPortfolio = () =>{
    
    return(
        <div className="App" id="Portfolio">
             <Navbar/>
              <Portfolio/>
              <ProjectQuest/>
              <CraftingSolution/>
              <PortfolioContent/>
              <Legacy/>
              <Contribution/>

        </div>
    )
};
export default OurPortfolio;