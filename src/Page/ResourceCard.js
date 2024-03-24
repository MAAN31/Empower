import React from "react";
import card from "./card.css";

const ResourceCard = ({logo, title, description, url}) =>{
    return(
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
    )
}
export default ResourceCard;