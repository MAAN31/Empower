import React from 'react';
import "./qna.css";

const QandA = ({ question, answer, imageUrl }) => {
    return (
        <div className="q-and-a">
            <h2>{question}</h2>
            <p>{answer}</p>
            {imageUrl && <img src={imageUrl} alt="Question Image" />}
        </div>
    );
};

export default QandA;