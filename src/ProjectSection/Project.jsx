import React from "react";
import PropTypes from "prop-types";

const Project = ({ getprojectdata }) => {
  // Load More Functionality

  const [noOfElement, setnoOfElement] = React.useState(3);
  const slice = getprojectdata.slice(0, noOfElement);

  const loadmore = () => {
    setnoOfElement(noOfElement * 2);
  };

  const loadless = () => {
    setnoOfElement(3);
  };

  return (
    <>
      <section className="section section-project" id="project">
        <div className="container">
          <h2 className="common-heading project-heading">
            My Latest Work&nbsp; <i className="fa-solid fa-circle-check"></i>
          </h2>
          <p className="project-para">
            Embark on a journey through my recent projects: web development,
            mobile apps, and software solutions, all tailored to client success.
          </p>
          <div className="project-part grid grid-three-columns">
            {slice.map((curele) => {
              return (
                <div className="project-box" key={curele.id}>
                  <img src={curele.img} alt="img" />
                  <div className="project-overlay">
                    <h3>{curele.title}</h3>
                    <p>{curele.desc}</p>
                    <a href={curele.link} target="_blank">
                      <i className={curele.icon}></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {noOfElement <= 3 && (
            <button className="btn load-btn" onClick={loadmore}>
              Show More
            </button>
          )}
          {noOfElement > 3 && (
            <button className="btn load-btn" onClick={loadless}>
              Show Less
            </button>
          )}
        </div>
      </section>
    </>
  );
};

Project.propTypes = {
  getprojectdata: PropTypes.array.isRequired,
};

export default Project;
