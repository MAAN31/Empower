import ProjectQuest from "./ProjectQuest";
import QandA from "./QandA";

const Portfolio = () =>{
    const qnas = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
            imageUrl: "https://example.com/react.jpg"
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like.",
            imageUrl: "https://example.com/jsx.jpg"
        },
    ];
    return(
        <div>
            <ProjectQuest/>
            {qnas.map((qna, index) => (
                <QandA
                    key={index}
                    question={qna.question}
                    answer={qna.answer}
                    imageUrl={qna.imageUrl}
                />
            ))}
        </div>
    )
};
export default Portfolio;