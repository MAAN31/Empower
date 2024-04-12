import React from "react";
import "./ResourceHub.css";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCard.js";
import akul from "../Assets/logo.png";
import Book from "../Assets/Book.png";
import Plan from "../Assets/Plan.png";
import Guidance from "../Assets/Guidance.png";
import TD from "../Assets/TD.png";
import Research from "../Assets/Reasearch.png";
import Global from "../Assets/Global.png";
import Data from "../Assets/Data.png";
import Toronto from "../Assets/Toronto.png";



const ResourceHub = () =>{
    const sources = [
        {
            logo: Plan,
            title: "Business Plan",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793936"
        },
        {
            logo: TD,
            title: "TD",
            description: "",
            url: "https://www.td.com/ca/en/business-banking/small-business/starting-your-business/market-research"
        },
        {
            logo: Guidance,
            title: "Guidance",
            description: "",
            url: "https://researchguides.library.yorku.ca/businessplan"
        },
        {
            logo: Book,
            title: "Books/e-Books", 
            description: "", 
            url: "https://researchguides.library.yorku.ca/c.php?g=679677&p=4793935"
        },
        {
            logo: Global,
            title: "Global Business",
            description: "",
            url: "https://researchguides.library.yorku.ca/countryinternationalbusiness"
        },
        {
            logo: Research,
            title: "Research",
            description: "",
            url: "https://www.library.yorku.ca/web/bbl/guides/"
        },
        {
            logo: Toronto,
            title: "Toronto Guide",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        },
        {
            logo: akul,
            title: "Our Journey",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790881"
        },
        {
            logo: Data,
            title: "Business Data",
            description: "",
            url: "https://researchguides.library.yorku.ca/c.php?g=679637&p=4790882"
        },
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

                    {sources.map((source, index) => (

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