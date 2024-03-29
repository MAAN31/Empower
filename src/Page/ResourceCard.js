import React from "react";
import "./card.css";
import { Col } from "react-bootstrap";

const ResourceCard = ({logo, title, description, url}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="card">
                <a>
                    <img src={logo} alt="Website Name" className="logo"/>
                </a>
                <p className="heading">
                    {title}
                </p>
                <p>
                    {description}
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="button">Visit Resource</button>
                </a>
            </div>
        </Col>
    )
}
export default ResourceCard;