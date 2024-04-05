import ProjectQuest from "./ProjectQuest";
import QandA from "./QandA";

const Portfolio = () =>{
    const qnas = [
        {
            question: "Unraveling the Quest",
            answer: "Our group tackled the challenge question by brainstorming unique ideas to gain different perspectives. Among the ideas we had were… We coordinated with our project sponsor Murwan Khogali Ali, a youth outreach worker at Healing as one. He provided us with valuable insights that guided our quest for a solution to the given challenge. Through his many connections we were able to establish contacts with multiple youth organizations and high schools. We initiated contact with multiple high schools and community centres to find potential collaborators. We finally landed 2 event sponsors at Tommy Douglas and Regent Park? To prepare for the workshop we coordinated with the school staff to set up equipment and event supplies to provide students with a platform to engage in entrepreneurial creativity.The Event at Tommy Douglas was a 2 day event with the first day for generating creative and unique business solutions to any of the UN sustainable development goals (SDGs). On the second day the students had the opportunity to pitch their business solution to an audience and a chance to win prizes such as… Alongside our development of a hands-on experiential based workshop we also  developed a resource hub website so that we could leverage the skills of our team members in Computer Science. The website developed was a user-centric, responsive and interactive website that will serve as an excellent marketing and outreach tool to communicate our mission statement.",
            imageUrl: "https://example.com/react.jpg"
        },
        {
            question: "Crafting the Solution",
            answer: "This challenge question revolves around developing training for future leaders in order to be capable of addressing community issues across both for-profit and not-for-profit sectors, while also encouraging entrepreneurship and creating their own business opportunities. Some important topics we must address in this question include establishing leadership development, communication skills, collaboration, creative problem solving and thinking, decision making, and innovation. Our question aims to implement educational initiatives that prepare young and impressionable future leaders with the necessary knowledge and expertise to navigate both for-profit and not-for-profit environments. This includes getting taught about business management, social entrepreneurship, and community development and then applying these topics to real-world scenarios in a creative way. This challenge question also promotes innovative solutions to social and environmental challenges while making sustainable revenue. By answering this question, EmpowerU encourages aspiring leaders to pursue ventures that combine profit with purpose, in order to ultimately drive and inspire positive change. Solving the challenge of empowering and training future leaders is worth solving and holds significant importance in many different ways. Our challenge confronts positive social change by addressing community issues which are crucial for improving the well-being and quality of life for individuals and communities. By empowering, training, and teaching future leaders to tackle these challenges, we can make meaningful progress towards creating a more equitable, inclusive, and sustainable society. Our question is also worth solving because it addresses long-term sustainability, something that is needed more than ever in this day and age. This challenge empowers future leaders to be committed to addressing community issues and ensures that we have a sustainable approach to confronting complex societal challenges. By investing in collaborative leadership development, we can create a new generation of changemakers who are prepared to create and care about lasting positive change. By committing to this question, we can also make a difference through economic growth and development through investing in leadership development and entrepreneurship as it can stimulate economic growth and create new business opportunities for youth that are thinking about being involved in the business realm, a rate that is constantly growing. Finally, this question is worth solving because the process of responding to it promotes social justice and equity. Many community issues disproportionately affect marginalized and underserved populations. By prioritizing leadership development initiatives that promote diversity, equity, and inclusion, we can work towards creating a more just and equitable society where everyone has the opportunity to thrive.",
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