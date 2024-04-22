// import React from 'react'
import PropTypes from "prop-types";

const Navbar = ({ navdata }) => {
  return (
    <>
      <nav className="navbar">
        {navdata.map((curele) => {
          return (
            <ul key={curele.id}>
              <li>
                <a className="navlink" href={curele.to}>{curele.name}</a>
              </li>
            </ul>
          );
        })}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  navdata: PropTypes.array.isRequired,
};

export default Navbar;
