import React from "react";
import ResourceCard from "./ResourceCard";
import logo from "../Assets/webLogo.png";
import "./ResourceHub.css";
import { Container, Row, Col } from "react-bootstrap";


const ResourceHub = () =>{
    const sources = [
        {
            logo: logo,
            title: "Lib1", 
            description: "This is an example resource description.", 
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: logo,
            title: "Lib2",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: logo,
            title: "Lib3",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/businessplan"
        },
        {
            logo: logo,
            title: "Lib4",
            description: "This is an example resource description.",
            url: "https://www.td.com/ca/en/business-banking/small-business/starting-your-business/market-research"
        },
        {
            logo: logo,
            title: "Lib5",
            description: "This is an example resource description.",
            url: "https://www.library.yorku.ca/web/bbl/guides/"
        },
        {
            logo: logo,
            title: "Lib6",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/countryinternationalbusiness"
        },
        {
            logo: logo,
            title: "Lib7",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790882"
        },
        {
            logo: logo,
            title: "Lib8",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        }
    ];
    return(
        <section className="resource-section">
            <Container>
                <Row className="boldtitle">Resources</Row>
                <Row>
                    {sources.map((source, index) =>(
                        <Col key={index} md={4}>
                            <ResourceCard
                                logo={source.logo}
                                title={source.title}
                                description={source.description}
                                url={source.url}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
export default ResourceHub;