import React from "react";
import video1 from "../images/page1/video1.mp4";

const Page2 = () => {
  const featuresOverview = [
    {
      id: 1,
      title: "Precise Contextual Analysis",
      description:
        "Designing a system capable of analyzing dating app bios to detect relevant information such as interests, tone, or personality traits while ensuring high accuracy and respecting user privacy.",
    },
    {
      id: 2,
      title: "Personalized Content Generation",
      description:
        "Developing an AI-based algorithm (GPT-4O) to create unique and relevant pickup lines tailored to each user, avoiding generic or inappropriate responses to foster meaningful engagement.",
    },
    {
      id: 3,
      title: "Flexible Tone Options",
      description:
        "Providing a variety of tones (humorous, serious, romantic, etc.) to suit user preferences, while ensuring authenticity and consistency with the analyzed profile data.",
    },
    {
      id: 4,
      title: "Saved Data Management",
      description:
        "Implementing a feature that allows users to save and organize generated pickup lines, with an intuitive interface that simplifies management and enhances user experience.",
    },
    {
      id: 5,
      title: "Intuitive and User-Friendly Design",
      description:
        "Creating a clear and simple interface that enables users to effortlessly copy and paste lines into their conversations, while ensuring the application remains accessible and enjoyable for beginners.",
    },
  ];
  return (
    <div className="page2-container">
      <div className="content">
        <video className="page2-image" autoPlay loop muted playsInline>
          <source src={video1} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="page2-infos-container">
          <div className="page2-title-container">
            <div className="page2-title">CHALLENGES AND OBJECTIVES</div>
          </div>
          <div className="page2-text">
            {featuresOverview.map((feature) => (
              <div key={feature.id} className="feature-item">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
