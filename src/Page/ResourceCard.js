import React from "react";
import "./card.css";
import { Col } from "react-bootstrap";

const ResourceCard = ({logo, title, description, url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="Resource-Card">
            <img src={logo} alt="Website Name" className="logo"/>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button>Visit Resource</button>
                </a>
            </div>
        </div>
        </Col>
    )
}
export default ResourceCard;