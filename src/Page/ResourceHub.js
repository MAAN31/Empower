import React from "react";
import ResourceCard from "./ResourceCard";
import logo from "../Assets/webLogo.png";
import "./ResourceHub.css";
import { Container, Row, Col } from "react-bootstrap";
import akul from "../Assets/Photo on 2023-08-08 at 7.50 PM #2.jpg";


const ResourceHub = () =>{
    const sources = [
        {
            logo: akul,
            title: "Books/e-Books", 
            description: "This is an example resource description.", 
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: logo,
            title: "Business Plan",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: logo,
            title: "Guidance",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/businessplan"
        },
        {
            logo: logo,
            title: "TD",
            description: "This is an example resource description.",
            url: "https://www.td.com/ca/en/business-banking/small-business/starting-your-business/market-research"
        },
        {
            logo: logo,
            title: "Business Research",
            description: "This is an example resource description.",
            url: "https://www.library.yorku.ca/web/bbl/guides/"
        },
        {
            logo: logo,
            title: "International Business",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/countryinternationalbusiness"
        },
        {
            logo: logo,
            title: "Business Data",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790882"
        },
        {
            logo: logo,
            title: "Research Guide",
            description: "This is an example resource description.",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        },
        {
            logo: logo,
            title: "Contact Us",
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