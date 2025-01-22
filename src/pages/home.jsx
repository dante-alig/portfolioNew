import Header from "../components/header";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectOverview from "../components/projectOverview";
// ------ responsive--------
import mockupBelamiResponsiveInfos from "../images/responsive/belami.png";
import mockupBelamiResponsive from "../images/responsive/belami1.png";
import mockupBelamiResponsive2 from "../images/responsive/belami2.png";
import mockupBelamiResponsive3 from "../images/responsive/belami3.png";
import mockupBelamiResponsive4 from "../images/responsive/belami4.png";
import mockupBelamiResponsive5 from "../images/responsive/belami5.png";
import mockupKarineResponsive from "../images/responsive/karine1.png";
import mockupKarineResponsive2 from "../images/responsive/karine3.png";
import mockupKarineResponsive3 from "../images/responsive/karine4.png";
import mockupKarineResponsive4 from "../images/responsive/karine5.png";
import mockupMarvelResponsive from "../images/responsive/marvel1.png";
import mockupMarvelResponsive2 from "../images/responsive/marvel2.png";
import mockupMarvelResponsive3 from "../images/responsive/marvel3.png";
import mockupMarvelResponsive4 from "../images/responsive/marvel4.png";
import mockupMarvelResponsive5 from "../images/responsive/marvel5.png";
import mockupLovelyResponsive from "../images/responsive/lovely1.png";
import mockupLovelyResponsive2 from "../images/responsive/lovely2.png";
import mockupLovelyResponsive3 from "../images/responsive/lovely3.png";
import mockupLovelyResponsive4 from "../images/responsive/lovely4.png";
import mockupYeniResponsive from "../images/responsive/yeni1.png";
import mockupYeniResponsive2 from "../images/responsive/yeni2.png";
import mockupYeniResponsive3 from "../images/responsive/yeni3.png";
import mockupYeniResponsive4 from "../images/responsive/yeni4.png";
// ------ icons--------
import karine from "../images/icon/k.png";
import belami from "../images/icon/belami.png";
import marvel from "../images/icon/marvel.png";
import lovely from "../images/icon/lovelyplace.png";
import yeni from "../images/icon/yeni.png";

// ------ technos--------
import openai from "../images/technos/openai.png";
import figma from "../images/technos/figma.png";
import react from "../images/technos/react.png";
import nodeJs from "../images/technos/node.png";
import express from "../images/technos/express.png";
import typescript2 from "../images/technos/typescript2.png";
import motion2 from "../images/technos/motion2.png";
import react2 from "../images/technos/react2.png";
import mongo from "../images/technos/mongodb.png";
import expo from "../images/technos/expo.png";

// ------ presentation--------
import belamiPresentation from "../images/presentation/belami.png";
import karinePresentation from "../images/presentation/karine.png";
import marvelPresentation from "../images/presentation/marvel.png";
import lovelyPresentation from "../images/presentation/lovely.png";
// ------ videos--------
import video1 from "../images/videos/video1.mp4";
import video2 from "../images/videos/video2.mp4";
import video3 from "../images/videos/video3.mp4";
import video4 from "../images/videos/video4.mp4";
// ------ mockups--------
import mockup from "../images/page1/mockup.png";

import { Link } from "react-router-dom";

const Home = ({ parallaxRef }) => {
  return (
    <div className="container">
      <Parallax ref={parallaxRef} pages={6} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <Header parallaxRef={parallaxRef} />
        </ParallaxLayer>

        {/* -------------------------LOVELY PLACE------------------------- */}
        <ParallaxLayer offset={0.999} speed={0.5}>
          <ProjectOverview
            pageNumber="01"
            totalPages="05"
            titlePresentation="Lovely place - the best romantic spots in Paris to create unforgettable dates."
            title="Lovely place"
            date="Novembre 2024 - in progress "
            techno={[
              "Figma",
              "React",
              "Typescript",
              "Google Map API",
              "MongoDB",
            ]}
            roles={["Ui Design", "Dev front & back"]}
            bgColor="#f5e6c7"
            txtColor="black"
            border="black"
            bgContainer="black"
            pageSlider={{
              icon: lovely,
              titleSlider: "Lovely place",
              subTitle: "/ app mobile",
              texte:
                "Lovely Place is a website designed to turn every date into a unique and personalized experience. It helps users find the perfect place and activity for a date, based on various criteria such as personal preferences, the desired atmosphere, and budget. The site stands out with its tailored approach, enabling users to plan memorable moments perfectly suited to the person they want to invite.",
              imageSlider: lovelyPresentation,
              backgroundTextSlider: "#ffffff",
              textColor: "black",
            }}
            technologies={[
              {
                id: 1,
                name: "React",
                logo: react,
                url: "https://openai.com",
              },
              {
                id: 2,
                name: "Express",
                logo: express,
                url: "https://openai.com",
              },
              {
                id: 3,
                name: "Node Js",
                logo: nodeJs,
                url: "https://openai.com",
              },
              {
                id: 4,
                name: "MongoDB",
                logo: mongo,
                url: "https://openai.com",
              },
            ]}
            pageSlider2={{
              videoSlider: video4,
              backgroundSlider: "#000000",
              textColor: "white",
              featuresOverview: [
                {
                  id: 1,
                  title: "Geolocation-Based Recommendations",
                  description:
                    "Implement an accurate geolocation feature to recommend relevant places in real-time.",
                },
                {
                  id: 2,
                  title: "Category Filters",
                  description:
                    "Design an efficient filtering system that allows users to customize their searches based on various criteria (type of activity, ambiance, budget, etc.).",
                },
                {
                  id: 3,
                  title: "Location Mapping on Google Maps",
                  description:
                    "Develop an interactive and responsive map with dynamic markers for each recommended location.",
                },
                {
                  id: 4,
                  title: "Providing Relevant Information",
                  description:
                    "Offer detailed descriptions for each recommended place, including reviews, opening hours, photos, and other useful information to enhance the user experience.",
                },
              ],
            }}
            pageSlider3={mockup}
            sliderImagesResponsive={[
              mockupLovelyResponsive,
              mockupLovelyResponsive2,
              mockupLovelyResponsive3,
              mockupLovelyResponsive4,
            ]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link-lovely",
              linkSpan: "link-lovely",
              typoGitHub: "fa-arrow-up-right-from-square-lovely",
            }}
            link={[
              {
                url: "https://lovelyplace-main.netlify.app/",
                title: "Netlify",
              },
              {
                url: "https://github.com/dante-alig/portfolio_lovelyback.git",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        {/* -------------------------MARVEL------------------------- */}
        <ParallaxLayer offset={1.999} speed={0.5}>
          <ProjectOverview
            pageNumber="02"
            totalPages="05"
            titlePresentation="Marvel - Catalogs all characters in one place."
            title="Marvel"
            date="Aout 2024 "
            techno={["React", "Backend", "Express", "MongoDB"]}
            roles={["Ui Design", "Dev front & back"]}
            bgColor="#1A1B1D"
            txtColor="#ea3323"
            border="#ea3323"
            bgContainer="black"
            pageSlider={{
              icon: marvel,
              titleSlider: "Marvel",
              subTitle: "/ app mobile",
              texte:
                "Marvel is a mobile application designed for users of dating apps. Its goal is to transform a profile picture or biography into engaging conversational opportunities. By leveraging artificial intelligence such as GPT-4, the application performs content analysis and generates personalized phrases. This use of AI helps users break the ice in a natural and meaningful way, while highlighting the practical application of LLMs in real-world scenarios. The application is still under development.",
              imageSlider: marvelPresentation,
              backgroundTextSlider: "#f71804",
              textColor: "black",
            }}
            technologies={[
              {
                id: 1,
                name: "React",
                logo: react,
                url: "https://openai.com",
              },
              {
                id: 2,
                name: "Express",
                logo: express,
                url: "https://openai.com",
              },
              {
                id: 3,
                name: "Node",
                logo: nodeJs,
                url: "https://openai.com",
              },
              {
                id: 4,
                name: "MongoDb",
                logo: mongo,
                url: "https://openai.com",
              },
            ]}
            pageSlider2={{
              videoSlider: video3,
              backgroundSlider: "#000000",
              textColor: "white",
              featuresOverview: [
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
              ],
            }}
            pageSlider3={mockup}
            sliderImagesResponsive={[
              mockupMarvelResponsive,
              mockupMarvelResponsive2,
              mockupMarvelResponsive3,
              mockupMarvelResponsive4,
              mockupMarvelResponsive5,
            ]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-marvel",
            }}
            link={[
              {
                url: "https://marvelarchiv.netlify.app/",
                title: "Netlify",
              },
              {
                url: "https://github.com/dante-alig/portfolio_marvel",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        {/* -------------------------BELAMI------------------------- */}
        <ParallaxLayer offset={2.999} speed={1.5}>
          <ProjectOverview
            pageNumber="03"
            totalPages="05"
            titlePresentation="Belami - AI generated creative opening messages."
            title="Belami"
            date="October 2024 - in progress"
            techno={["React Nativ", "Figma", "Open AI", "Backend"]}
            roles={["Ui Design", "Dev front & back"]}
            bgColor="black"
            border="white"
            bgContainer="#f5e6c7"
            // Images pour le slider (vous pouvez les remplacer par vos propres images)
            pageSlider={{
              icon: belami,
              titleSlider: "Belami",
              subTitle: "/ app mobile",
              texte:
                "Belami is a mobile application designed for users of dating apps. Its goal is to transform a profile picture or biography into engaging conversational opportunities. By leveraging artificial intelligence such as GPT-4, the application performs content analysis and generates personalized phrases. This use of AI helps users break the ice in a natural and meaningful way, while highlighting the practical application of LLMs in real-world scenarios. The application is still under development.",
              imageSlider: belamiPresentation,
              backgroundTextSlider: "#f5e6c7",
              textColor: "black",
            }}
            technologies={[
              {
                id: 1,
                name: "OpenAI",
                logo: openai,
                url: "https://openai.com",
              },
              {
                id: 2,
                name: "Expo",
                logo: expo,
                url: "https://openai.com",
              },
              {
                id: 3,
                name: "Figma",
                logo: figma,
                url: "https://openai.com",
              },
              {
                id: 4,
                name: "Express",
                logo: express,
                url: "https://openai.com",
              },
              {
                id: 5,
                name: "Node",
                logo: nodeJs,
                url: "https://openai.com",
              },
              {
                id: 6,
                name: "React",
                logo: react,
                url: "https://openai.com",
              },
            ]}
            pageSlider2={{
              videoSlider: video1,
              backgroundSlider: "#f5e6c7",
              textColor: "black",
              featuresOverview: [
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
              ],
            }}
            pageSlider3={mockup}
            sliderImagesResponsive={[
              mockupBelamiResponsiveInfos,
              mockupBelamiResponsive,
              mockupBelamiResponsive2,
              mockupBelamiResponsive3,
              mockupBelamiResponsive4,
              mockupBelamiResponsive5,
            ]}
            cssStyle={[
              "featured-container",
              "featured-mokup",
              "featured-presentation",
              "button-display-off",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-marvel",
            }}
            link={[
              {
                url: "https://www.figma.com/design/sOXpTDyout0PXphyu70Paa/Belami?node-id=0-1&t=l1V4DIsDR2gYxShT-1",
                title: "Figma",
              },
              {
                url: "https://github.com/dante-alig/belami_0.1.git",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        {/* -------------------------KARINE RASPAIL------------------------- */}
        <ParallaxLayer offset={3.3} speed={2}>
          <ProjectOverview
            pageNumber="04"
            totalPages="05"
            titlePresentation="Karine Raspail - Therapist in psychogenealogy"
            title="Karine Raspail"
            date="September 2024"
            techno={["React", "responsive", "Typescript", "Frame Motion"]}
            roles={["Ui Design", "Dev front"]}
            bgColor="#E1EAE9"
            txtColor="black"
            border="black"
            bgContainer="#ffffff"
            pageSlider={{
              icon: karine,
              titleSlider: "Psychogenealogy",
              subTitle: "/ Website",
              texte:
                "My first individual web development project, created for a family member. This project allowed me to strengthen my programming skills and familiarize myself with TypeScript. The intentionally simple design reflects my main goal: to explore and master the technical fundamentals of this language.",
              imageSlider: karinePresentation,
              backgroundTextSlider: "#000000",
              textColor: "white",
            }}
            technologies={[
              {
                id: 1,
                name: "React",
                logo: react2,
                url: "https://openai.com",
              },
              {
                id: 2,
                name: "Ts",
                logo: typescript2,
                url: "https://openai.com",
              },
              {
                id: 3,
                name: "Framer",
                logo: motion2,
                url: "https://openai.com",
              },
            ]}
            pageSlider2={{
              videoSlider: video2,
              backgroundSlider: "#000000",
              textColor: "white",
              featuresOverview: [
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
              ],
            }}
            pageSlider3={mockup}
            sliderImagesResponsive={[
              mockupKarineResponsive,
              mockupKarineResponsive2,
              mockupKarineResponsive3,
              mockupKarineResponsive4,
            ]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link",
              linkSpan: "link",
              typoGitHub: "fa-arrow-up-right-from-square",
            }}
            link={[
              {
                url: "https://psychogenealogie.netlify.app",
                title: "Netlify",
              },
              {
                url: "https://github.com/dante-alig/portfolio_therapeute.git",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        {/* -------------------------YENI------------------------- */}
        <ParallaxLayer offset={3.999} speed={0.5}>
          <ProjectOverview
            pageNumber="05"
            totalPages="05"
            titlePresentation="Yeni - Connects creators and businesses for seamless creative collaborations."
            title="Yeni"
            txtColor="#abcc48"
            date="Decembre 2024 - in progress"
            techno={["React Nativ", "Figma", "Open AI"]}
            roles={["Ux Ui Design", "Dev front & back"]}
            bgColor="black"
            border="white"
            bgContainer="#171616"
            pageSlider={{
              icon: yeni,
              titleSlider: "Yeni",
              subTitle: "/ app mobile",
              texte:
                "YENI is a platform dedicated to creation, collaboration, and visibility exchange among content creators, artists, influencers, models, and businesses. Its mission is to simplify and streamline collaborations in the audiovisual, creative, and fashion industries by leveraging a model of mutual benefit. At the same time, it enables brands to support their growth in a gradual, creative, and authentic way.",
              imageSlider: belamiPresentation,
              backgroundTextSlider: "#545454",
              textColor: "black",
            }}
            technologies={[
              {
                id: 1,
                name: "OpenAI",
                logo: openai,
                url: "https://openai.com",
              },
            ]}
            pageSlider2={{
              videoSlider: video1,
              backgroundSlider: "#f0e7cc",
              textColor: "black",
              featuresOverview: [
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
              ],
            }}
            pageSlider3={mockup}
            sliderImagesResponsive={[
              mockupYeniResponsive,
              mockupYeniResponsive2,
              mockupYeniResponsive3,
              mockupYeniResponsive4,
            ]}
            cssStyle={[
              "featured-container",
              "featured-mokup",
              "featured-presentation-yeni",
              "button-display-off",
              "fa-arrow-up-right-from-square-yeni",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-yeni",
            }}
            link={[
              {
                url: "",
                title: "Figma",
              },
            ]}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4.999} speed={0}>
          <div className="about">
            <div className="about-container">
              <div className="title-container-bottom">
                <div className="title-box">
                  <h1>Nice to meet you,</h1>
                  <h1> Let’s connect.</h1>
                </div>
                <Link
                  to="https://calendly.com/samuelceleste/appel"
                  target="_blank"
                  className="bookACall"
                >
                  Book a call
                </Link>
                {/* <div className="mail">2025 Dante Design</div> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
