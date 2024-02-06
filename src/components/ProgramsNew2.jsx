import React, { useState } from "react";
import demo1 from "../assets/demo.png";
import demo2 from "../assets/demo2.webp";
import close from "../assets/close.svg";
import "./styles/ProgramsNew2.css";

export default function ProgramsNew2() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const sessions = [
    {
      name: "Registration starts",
      handler: "",
      date: "10/02/24",
      details: "Registration starts from 10th February 2024.",
    },
    {
      name: "Registration close",
      handler: "",
      date: "20/2/24",
      details: "Registration closes on 20th February 2024.",
    },
    {
      name: "Announcing selected candidates",
      handler: "",
      date: "28/02/24",
      details: "Selected candidates will be announced on 28th February 2024.",
    },
    {
      name: "Idea Validation, Prototyping & BMC",
      handler: "Jolly jose",
      date: "01/3/24",
      details:
        "The validation of your ideas and learning how to present and set them up in the arena of entrepreneurship and business are the keys to a successful startup. Explore the role of idea validation through effective hands-on sessions focused on ideation and brainstorming techniques. Strengthen your knowledge of prototyping and use it to refine your innovative ideas. Get to know how to implement your ideas in the world of business with a thorough understanding of the business model canvas (BMC).",
    },
    {
      name: "Building the Right Team",
      handler: "Ramees ali",
      date: "08/3/24",
      details:
        "The backbone of any successful, long-lasting startup venture is always a team of passionate and determined individuals. Learn how to build the right team through effective sessions on team dynamics for the success of a startup. Master the art of bringing in the best problem solvers and innovators to your team. Here you will also learn how to identify key roles and the different recruitment strategies by structuring a team based on the business requirements. Acquire the right talent, foster a positive and cohesive team culture, and understand the importance of communication and collaboration for a stable startup environment.",
    },
    {
      name: "Customer Acquisition & GTM Strategies",
      handler: "Arun pandi",
      date: "15/3/24",
      details:
        "To thrive, businesses must segment their audience and tailor offerings accordingly. Effective Go-to-Market (GTM) strategies are essential, involving messaging, pricing, distribution, and promotion to reach customers effectively. Implementing customer acquisition tactics across digital, social, and traditional channels is vital. Key takeaways include precise targeting, crafting compelling messaging, and adapting strategies based on feedback and metrics.",
    },
    {
      name: "Founders Story",
      handler: "Abdul Rahiman Dilshaad",
      date: "16/3/24",
      details:
        "Gain insights and inspiration from the personal journey and experiences of Abdul Rahiman Dilshaad, a successful entrepreneur. Learn from their challenges, triumphs, and valuable lessons along the path of startup creation and growth.",
    },
    {
      name: "Session on 'Framing Your Pitch Deck'",
      handler: "Junaid Ahammed",
      date: "22/3/24",
      details:
        "This session underscores the importance of a compelling pitch deck in attracting investors. Participants will learn key elements and structures for effective pitch decks through hands-on exercises, refining their skills in crafting persuasive narratives that communicate their startup's value proposition clearly.",
    },
    {
      name: "Founders Story",
      handler: "",
      date: "23/3/24",
      details: "Gain insights and inspiration from the personal journey and experiences of a successful entrepreneur. Learn from their challenges, triumphs, and valuable lessons along the path of startup creation and growth.",
    },
    {
      name: "Role of Community in Startup Growth",
      handler: "Mittu Tiggi",
      date: "30/3/24",
      details:
        "In a dynamic startup ecosystem, cultivating a supportive network is paramount. Engage with like-minded individuals, share insights, and foster relationships that go beyond mere connections. A thriving community isn't just a resource; it's a cornerstone for sustainable startup success. Embrace the power of collaboration and shared goals, for within this support lies the key to unlocking a startup's true potential. Leverage this network as a catalyst for gaining opportunities and feedback, attracting partnerships, and accessing a diverse skill set.",
    },
    {
      name: "Financial Planning for Startups",
      handler: "Krutika Ravishankar",
      date: "05/4/24",
      details:
        "Master the basics by creating robust budgets, precise forecasts, and efficient financial management. Learn to allocate resources judiciously, thereby ensuring optimal operations. Explore diverse funding options, as financial sustainability is important for gaining resilience and attractiveness to potential investors. Dive into the world of financial planning. Start smart, stay resilient, embrace the art of budgeting and managing finances, and thrive in the competitive startup ecosystem.",
    },
    {
      name: "Building a Minimum Viable Product (MVP)",
      handler: "Shyam pradeep",
      date: "10/4/24",
      details:
        "The Minimum Viable Product (MVP) is a foundational strategy in product development, focusing on creating a basic version of a product with essential features to swiftly launch and gather user feedback. The MVP's importance lies in its ability to mitigate risks by providing an early market entry point, enabling teams to test assumptions and adapt based on real user interactions. Testing and iterating based on user feedback form a continuous cycle, involving feedback loops, data-driven decisions, and agile methodologies. This process not only refines the product but also builds a user community, ensuring that subsequent iterations align closely with user needs and preferences for sustained success in the competitive market landscape.",
    },
    {
      name: "Founders Story",
      handler: "Yamuna K",
      date: "13/4/24",
      details:
        "Gain insights and inspiration from the personal journey and experiences of Yamuna K, a successful entrepreneur. Learn from their challenges, triumphs, and valuable lessons along the path of startup creation and growth.",
    },
    {
      name: "The art of FundRaising",
      handler: "Manu francis",
      date: "16/4/24",
      details:
        "Fundraising as we know is an important aspect of startups. From the very beginning of a startup initiative, capital plays a critical role. Each option of fundraising has its own advantages, risks, and considerations. A compelling fundraising strategy is essential for attracting investors. It involves thoroughly understanding the business's financial needs, setting realistic goals, and presenting a clear and compelling business plan. Successful fundraising requires adaptive navigation of investor meetings and negotiations. Entrepreneurs should be well-prepared to articulate their vision, address potential concerns, and showcase the startup's potential for growth.",
    },
    {
      name: "Founders Story",
      handler: "",
      date: "26/4/24",
      details: "",
    },
    {
      name: "Final Pitch Day and Course Conclusion",
      handler: "",
      date: "27/4/24",
      details:
        "The final pitch of the respective projects will be presented by all the participating startups. This pivotal moment is a culmination of dedicated efforts, strategic adaptations, and iterative development. Following the presentations, startups receive constructive feedback from mentors and peers, facilitating refinement of business strategies and addressing potential challenges. This iterative process of evaluation fosters a culture of continuous improvement. The program concludes with a reflective session, allowing founders to celebrate achievements, assess lessons learned, and acknowledge personal and collective growth.",
    },
  ];

  const handleSessionClick = (session) => {
    setSelectedSession(session);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="ProgramsNew2" id="programs">
      <div className="program-schedule text-xl md:text-3xl text-[#F56E0F]">
        Program Schedule
      </div>
      <div className="timeline">
        {sessions.map((session, index) => (
          <div
            className={`session ${index % 2 === 0 ? "left" : "right"}`}
            onClick={() => handleSessionClick(session)}
          >
            {/* <img className="session-image" src={session.image} alt="image" /> */}
            <div className="session-details">
              <h3 className="session-name">{session.name}</h3>
              <p className="session-description">{session.handler}</p>
              <p className="session-description">{session.date}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={handleClose}>
              <img className="popup-close" src={close} alt="close" />
            </button>
            <h2 className="popup-name">{selectedSession.name}</h2>
            <p className="popup-details">{selectedSession.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
