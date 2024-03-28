import React from "react";
import ResourceCard from "./ResourceCard";
import "./ResourceHub.css";
import { Container, Row, Col } from "react-bootstrap";
import akul from "../Assets/akulll.jpg";


const ResourceHub = () =>{
    const sources = [
        {
            logo: akul,
            title: "Books/e-Books", 
            description: "", 
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: akul,
            title: "Business Plan",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: akul,
            title: "Guidance",
            description: "",
            url: "https://researchguides.library.yorku.ca/businessplan"
        },
        {
            logo: akul,
            title: "TD",
            description: "",
            url: "https://www.td.com/ca/en/business-banking/small-business/starting-your-business/market-research"
        },
        {
            logo: akul,
            title: "Research",
            description: "",
            url: "https://www.library.yorku.ca/web/bbl/guides/"
        },
        {
            logo: akul,
            title: "Global Business",
            description: "",
            url: "https://researchguides.library.yorku.ca/countryinternationalbusiness"
        },
        {
            logo: akul,
            title: "Business Data",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790882"
        },
        {
            logo: akul,
            title: "Research Guide",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        },
        {
            logo: akul,
            title: "Contact Us",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        }
    ];
    return(
        <section className="resource-section">
            <Container>
                <Col>
                <Row>
                    <Col>
                        <h2 className="boldtitle">ResourceHub</h2>
                    </Col>
                </Row>
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
                </Col>
            </Container>
        </section>
    )
}
export default ResourceHub;