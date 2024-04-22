// import React from 'react'
import PropsTypes from "prop-types"

const Service = ({ getservicedata }) => {
  return (
    <>
      <section className="section section-service" id="service">
        <div className="container">
          <h2 className="common-heading service-heading">
            My Services&nbsp; <i className="fa-solid fa-code"></i>
          </h2>
          <p className="service-para">
            Elevate your digital presence with tailored solutions in web,
            mobile, and software development. We excel in crafting scalable,
            efficient, and innovative solutions.
          </p>
          <div className="service-boxes grid grid-three-columns">
            {getservicedata.map((curele) => {
              return (
                <div className="service-box" key={curele.id}>
                  <i className={curele.icon}></i>
                  <h3>{curele.title}</h3>
                  <p>
                    {curele.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Service.propTypes = {
  getservicedata: PropsTypes.array.isRequired,
};

export default Service;
