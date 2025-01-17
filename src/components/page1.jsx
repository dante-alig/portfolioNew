import React from "react";
import icon from "../images/page1/icon.png";
import tech1 from "../images/page1/tech_gpt.png";
import presentation from "../images/page1/presentation.png";

const Page1 = () => {
  const technologies = [
    {
      id: 1,
      name: "OpenAI",
      logo: tech1,
      url: "https://openai.com"
    }
  ];

  return (
    <div className="page1-container">
      <div className="content">
        <div className="page1-infos-container">
          <div className="page1-title-container">
            <img className="page1-icon" src={icon} alt="logo" />
            <div className="page1-title">
              Belami<span>/ app mobile</span>
            </div>
          </div>
          <div className="page1-text">
            Belami is a mobile application designed for users of dating apps.
            Its goal is to transform a profile picture or biography into
            engaging conversational opportunities. By leveraging artificial
            intelligence such as GPT-4, the application performs content
            analysis and generates personalized phrases. This use of AI helps
            users break the ice in a natural and meaningful way, while
            highlighting the practical application of LLMs in real-world
            scenarios. The application is still under development.
          </div>
          <div>
            <div className="page1-techno-title">powered bye</div>
            <div>
              {technologies.map((tech) => (
                <a
                  key={tech.id}
                  className="page1-techno"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="logos-technos" src={tech.logo} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <img className="page1-image" src={presentation} alt="app image" />
      </div>
    </div>
  );
};

export default Page1;
