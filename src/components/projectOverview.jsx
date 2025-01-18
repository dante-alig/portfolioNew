import { motion } from "framer-motion";
import FeaturedProject from "./featuredProject";
import ProjectSlider from "./projectSlider";
import ProjectSliderResponsive from "./projectSliderResponsive";
import Image from "../images/macbook.png";

const ProjectOverview = ({
  pageNumber,
  totalPages,
  titlePresentation,
  title,
  date,
  techno,
  roles,
  bgColor,
  txtColor,
  border,
  bgContainer,
  projectThumbnail,
  cssStyle,
  link,
  buttonStyle,
  sliderImages,
  sliderImagesResponsive,
  pageSlider,
  technologies,
  pageSlider2,
  pageSlider3,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const infosVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="overview-container"
      style={{ backgroundColor: bgColor }}
      id={pageNumber === "01" ? "belami-section" : undefined}
    >
      <div className="overview-presentation-container">
        <div className="overview-box">
          <div className="overview-pagination">
            <span style={{ color: txtColor }}>{pageNumber}</span>
            <span>/</span>
            <span>{totalPages}</span>
          </div>
          <motion.div
            className="overview-title"
            style={{ color: txtColor }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={titleVariants}
          >
            {titlePresentation}
          </motion.div>
          <motion.div
            className="overview-infos"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={infosVariants}
          >
            <div className="overview-projet">
              <div>Project</div> <div style={{ color: txtColor }}>{title}</div>
            </div>
            <div className="overview-role">
              <div>Role</div>
              <ul style={{ color: txtColor }}>
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="overview-date">
              <div>Date</div>
              <div style={{ color: txtColor }}>{date}</div>
            </div>
          </motion.div>
        </div>
        <div className="overview-techno-box" style={{ color: txtColor }}>
          {techno.map((tech, index) => {
            return (
              <div
                key={index}
                className="techno"
                style={{ border: `1px solid ${border}` }}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <ProjectSlider
        images={sliderImages}
        link={link}
        txtColor={txtColor}
        pageSlider={pageSlider}
        technologies={technologies}
        pageSlider2={pageSlider2}
        pageSlider3={pageSlider3}
      />
      <ProjectSliderResponsive
        images={sliderImagesResponsive}
        link={link}
        txtColor={txtColor}
      />
    </div>
  );
};

export default ProjectOverview;
