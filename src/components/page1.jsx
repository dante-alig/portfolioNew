import React from "react";
import icon from "../images/page1/icon.png";
import tech1 from "../images/page1/tech_gpt.png";
import presentation from "../images/page1/presentation.png";

const Page1 = ({ pageSlider, technologies }) => {
  return (
    <div className="page1-container">
      <div className="content">
        <div className="page1-infos-container">
          <div className="page1-title-container">
            <img className="page1-icon" src={icon} alt="logo" />
            <div className="page1-title">
              {pageSlider.titleSlider}
              <span>{pageSlider.subTitle}</span>
            </div>
          </div>
          <div className="page1-text">{pageSlider.texte}</div>
          <div>
            <div className="page1-techno-title">powered by</div>
            <div>
              {technologies.map((tech) => (
                <a
                  key={tech.id}
                  className="page1-techno"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logos-technos"
                    src={tech.logo}
                    alt={tech.name}
                  />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <img
          className="page1-image"
          src={pageSlider.imageSlider}
          alt="app image"
        />
      </div>
    </div>
  );
};

export default Page1;
