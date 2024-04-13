"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam.tsx";
import Akul from '../Assets/akul.jpg';


export function CraftingSolution() {
    return (
      <TracingBeam className="px-6 bg-black">
       <h1 className="text-2xl font-bold text-center mb-8" style={{ textDecorationLine: 'underline' }}>Crafting the Solution</h1>

        <div className="max-w-2xl mx-auto antialiased pt-4 relative bg-black">
          {contentSteps.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2> */}
  
              <p className={twMerge("text-xl mb-4 font-bold text-left")}>
              {item.title}
            </p>
  
              <div className="text-sm prose prose-sm dark:prose-invert text-left">
                {item?.image && (
                 <img
                 src={item.image}
                 alt="blog thumbnail"
                 className="rounded-lg mb-10 object-cover max-h-96 max-w-full"
               />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    );
  }

const contentSteps = [
  {
    title: "Fostering Change Makers:",
    description: (
      <>
        In response to the challenge of empowering future leaders to address community issues and create business opportunities, our solution encompasses a multi-faceted approach that integrates leadership development, entrepreneurship, and social impact.
      </>
    ),
    badge: "React",
    image: Akul,
  },
  {
    title: "Establishing Leadership Development:",
    description: (
      <>
        Our initiative begins with a focus on equipping future leaders with essential skills necessary for effective leadership in both for-profit and not-for-profit sectors. Through tailored educational initiatives, we address key areas such as communication, collaboration, creative problem-solving, decision-making, and innovation. By providing young individuals with the tools and knowledge to navigate complex environments, we empower them to take on leadership roles with confidence and competence.
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Encouraging Entrepreneurship:",
    description: (
      <>
        Central to our approach is the promotion of entrepreneurship among aspiring leaders. We recognize the importance of fostering an entrepreneurial mindset and providing individuals with the support and resources needed to turn their ideas into reality. Through workshops, mentorship programs, and networking opportunities, we inspire and guide future leaders in the development of innovative solutions to social and environmental challenges. By emphasizing the alignment of profit with purpose, we encourage the creation of ventures that not only generate sustainable revenue but also drive positive social impact.
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Promoting Social Impact:",
    description: (
      <>
        At the core of our solution is a commitment to addressing community issues for positive social change. We believe that empowered leaders have a responsibility to contribute to the betterment of society by tackling pressing challenges such as poverty, inequality, and environmental degradation. By empowering, training, and teaching future leaders to confront these complex issues, we contribute to the creation of a more equitable, inclusive, and sustainable society. Our initiatives aim to instill a sense of social responsibility and encourage individuals to leverage their skills and resources for the greater good.
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Solving the Challenge:",
    description: (
      <>
         <h2 className="text-xl font-bold mb-4">Empowering and Training Future Leaders</h2>
  
  <ul className="list-disc pl-6 mb-6">
    <li>
      <p className="mb-2">
        Positive Social Change: By addressing community issues, we improve the well-being and quality of life for individuals and communities, driving positive social change.
      </p>
    </li>
    <li>
      <p className="mb-2">
        Long-term Sustainability: Our initiatives promote sustainable approaches to addressing societal challenges, ensuring that solutions are both effective and enduring.
      </p>
    </li>
    <li>
      <p className="mb-2">
        Economic Growth: Investing in leadership development and entrepreneurship stimulates economic growth and creates new opportunities for innovation and job creation.
      </p>
    </li>
    <li>
      <p className="mb-2">
        Social Justice and Equity: By prioritizing diversity, equity, and inclusion in our initiatives, we contribute to the creation of a more just and equitable society where everyone has the opportunity to thrive.
      </p>
    </li>
  </ul>

  <p>
    Through our commitment to this challenge, we aim to inspire a new generation of changemakers who are equipped with the skills, knowledge, and passion to drive meaningful and lasting positive change in their communities and beyond.
  </p>
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Crafting the Blueprint for Our Solution:",
    description: (
      <>
        <h2 className="text-xl font-bold mb-4">Preparation Phase:</h2>
  <p className="mb-6">
    We meticulously crafted the blueprint for our solution by initiating a series of strategic actions. Initially, we engaged in extensive discussions and brainstorming sessions to delineate our approach. This involved analyzing the challenge question thoroughly and identifying key components vital to addressing it effectively.
  </p>

  <h2 className="text-xl font-bold mb-4">Detailed Plan:</h2>
  <p className="mb-6">
    Our plan encompassed multifaceted strategies aimed at meticulously preparing for the upcoming workshops. We embarked on a journey of communication and collaboration, reaching out to various stakeholders such as Schulich School of Business and local schools. Through persistent emailing and networking efforts, we forged partnerships and gained valuable insights into the educational landscape.
  </p>

  <h2 className="text-xl font-bold mb-4">Implementation:</h2>
  <p>
    Executing our plan involved a concerted effort from the team. We dedicated significant time to researching business plans, meticulously creating booklets, and designing templates. This meticulous attention to detail ensured that our workshops would be well-structured and impactful, catering to the diverse needs of our audience.
  </p>
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Analyzing Our Solution",
    description: (
      <>
  
  <h2 className="text-lg font-bold mb-2">Success Metrics:</h2>
  <p className="mb-6">
    Our solution's effectiveness can be gauged through a comprehensive analysis of its various components. We employed a range of success metrics to evaluate our progress and measure our impact on the community.
  </p>

  <h2 className="text-lg font-bold mb-2">EmpowerU Program:</h2>
  <p className="mb-6">
    At the heart of our solution lies the "EmpowerU" program, a holistic initiative designed to empower future leaders. This program adopts a multifaceted approach, blending business fundamentals with sustainable development principles to equip students with the skills and knowledge necessary for success.
  </p>

  <h2 className="text-lg font-bold mb-2">Key Features:</h2>
  <p className="mb-6">
    The "EmpowerU" program boasts several key features that contribute to its effectiveness. These include interactive workshops, group activities, and competitive elements designed to foster collaboration, innovation, and strategic thinking among participants.
  </p>
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  {
    title: "Training and Empowerment::",
    description: (
      <>
        <h2 className="text-lg font-bold mb-2">Training and Empowerment:</h2>
  <p className="mb-6">
    Central to our workshops is the emphasis on training and empowering youth to tackle community issues and create their own business opportunities. Through hands-on activities and immersive learning experiences, students are equipped with the necessary tools and resources to drive positive change in their communities.
  </p>

  <h2 className="text-lg font-bold mb-2">Integration of SDGs:</h2>
  <p className="mb-6">
    A defining aspect of our solution is the integration of Sustainable Development Goals (SDGs) into every aspect of the program. By incorporating SDGs into business planning and decision-making processes, students are encouraged to adopt a holistic approach that prioritizes social, economic, and environmental sustainability.
  </p>

  <h2 className="text-lg font-bold mb-2">Impact and Scalability:</h2>
  <p>
    The potential impact of our solution extends far beyond the confines of our immediate community. With a scalable model in place, the "EmpowerU" program has the potential to be replicated and adapted to various educational contexts, amplifying its reach and influence on future leaders worldwide.
  </p>
      </>
    ),
    badge: "React",
    image:
      Akul,
  },
  // {
  //   title: "Workshop Design and Logistics:",
  //   description: (
  //     <>
  //       With the curriculum in place, we proceeded to plan the logistics of our workshops with meticulous attention to detail. This included selecting suitable venues, scheduling sessions, procuring materials and resources, and coordinating with partners and stakeholders. Our goal was to create a supportive and inspiring learning environment that would facilitate meaningful interactions and learning experiences.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // },
  // {
  //   title: "Facilitation and Engagement:",
  //   description: (
  //     <>
  //       Central to the success of our workshops was the effective facilitation and engagement of participants. Our team of trained facilitators employed a variety of interactive methods and techniques to encourage active participation, critical thinking, and collaboration. Through group discussions, case studies, role-plays, and hands-on activities, we sought to create opportunities for learning and skill development.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // },
  // {
  //   title: "Reflection and Action Planning:",
  //   description: (
  //     <>
  //       Post-workshop activities focused on reflection and action planning to help participants internalize their learnings and translate them into actionable plans for personal and professional growth. Structured reflection exercises, goal-setting activities, and peer feedback sessions were incorporated to support participants in identifying their strengths, areas for improvement, and next steps.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // },
  // {
  //   title: "Follow-Up and Support:",
  //   description: (
  //     <>
  //       Our commitment to the ongoing development and support of participants extended beyond the workshops themselves. We established channels for communication, mentorship programs, and online platforms to facilitate networking, knowledge-sharing, and continued learning. Our aim was to provide participants with the support and resources they need to sustain their momentum and drive towards their goals.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // },
  // {
  //   title: "Impact Assessment and Evaluation:",
  //   description: (
  //     <>
  //       To measure the effectiveness of our workshops and assess their impact, we conducted rigorous impact assessments and evaluations. This involved collecting feedback from participants and stakeholders through surveys, interviews, and observation. We analyzed the data collected to identify strengths, areas for improvement, and opportunities for future growth and development.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // },
  // {
  //   title: "Scaling and Sustainability:",
  //   description: (
  //     <>
  //       Building on the success of our initial workshops, we developed strategies for scaling our programs and ensuring their long-term sustainability. This included exploring partnerships, securing funding, and developing replication models that could be adapted and implemented in different contexts. Our goal was to expand our reach and impact, empowering even more future leaders to drive positive change in their communities.
  //     </>
  //   ),
  //   badge: "React",
  //   image:
  //     Akul,
  // }
];
