import React from "react";
import ResourceCard from "./ResourceCard";
import logo from "../Assets/webLogo.png";

const ResourceHub = () =>{
    return(
        <div className="">
            <ResourceCard logo={logo} title="Lib1" description="This is an example resource description." url="https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"/>
            <ResourceCard logo={logo} title="Lib2" description="This is an example resource description." url="https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"/>
            <ResourceCard logo={logo} title="Lib3" description="This is an example resource description." url="https://researchguides.library.yorku.ca/businessplan"/>
            <ResourceCard logo={logo} title="Lib4" description="This is an example resource description." url="https://www.td.com/ca/en/business-banking/small-business/starting-your-business/market-research"/>
            <ResourceCard logo={logo} title="Lib5" description="This is an example resource description." url="https://www.library.yorku.ca/web/bbl/guides/"/>
            <ResourceCard logo={logo} title="Lib6" description="This is an example resource description." url="https://researchguides.library.yorku.ca/countryinternationalbusiness"/>
            <ResourceCard logo={logo} title="Lib7" description="This is an example resource description." url="https://researchguides.library.yorku.ca/c.php?g=679637&p=4790882"/>
            <ResourceCard logo={logo} title="Lib8" description="This is an example resource description." url="https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"/>
        </div>
    )
}
export default ResourceHub;