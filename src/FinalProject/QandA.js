import React from 'react';
import "./qna.css"; // Import your CSS file for QandA component styling

const QandA = ({ question, answer, imageUrl }) => {
    return (
        <div className="qna-container">
            <div className="qna-content">
                <div className="qna-left">
                    <img src={imageUrl} alt="QandA Image" className="qna-image" />
                </div>
                <div className="qna-right">
                    <h3>{question}</h3>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default QandA;
