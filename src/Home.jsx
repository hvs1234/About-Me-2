import React from "react";
import Typed from "typed.js";
import Navbar from "./NavbarSection/navbar";
import navdata from "./NavbarSection/NavbarAPI";
import hero_img from "./assets/hero.webp";
import about_img from "./assets/about-img.webp";
import Service from "./ServiceSection/Service";
import servicedata from "./ServiceSection/ServiceAPI";
import Project from "./ProjectSection/Project";
import projectdata from "./ProjectSection/ProjectAPI";

const Home = () => {
  // ---------------------------- API Part Start -------------------------- //

  // Navbar API

  const [getnavdata] = React.useState(navdata);

  // Service API

  const [getservicedata] = React.useState(servicedata);

  // Project API

  const [getprojectdata] = React.useState(projectdata);

  // ---------------------------- API Part End ----------------------------- //

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Auto Type

  React.useEffect(() => {
    var type = new Typed(".auto-type", {
      strings: [
        'Web Developer `<i class="fa-solid fa-code"></i>`',
        'React Developer `<i class="fa-brands fa-react"></i>`',
        'Python Developer `<i class="fa-brands fa-python"></i>`',
      ],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Increment Counter

  React.useEffect(() => {
    const workdata = document.querySelector(".section-work");

    const workObserverCallback = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const countNum = document.querySelectorAll(".counter-numbers");
      const speed = 100;
      countNum.forEach((curEle) => {
        const updateNum = () => {
          const target = parseInt(curEle.dataset.number);
          const initial = parseInt(curEle.innerText);
          const increment = Math.trunc(target / speed);
          if (initial < target) {
            curEle.innerText = `${initial + increment}+`;
            setTimeout(updateNum, 5);
          } else {
            curEle.innerText = `${target}+`;
          }
        };
        updateNum();
      });
    };

    const options = {
      root: null,
      threshold: 0,
    };

    const workObserve = new IntersectionObserver(workObserverCallback, options);
    workObserve.observe(workdata);

    return () => {
      workObserve.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}

      <section className="section section-hero">
        <div className="overlay"></div>
        {/* Header Section */}
        <header className={`header ${isActive ? "active" : ""}`}>
          <div className="logo">
            <h2>
              <span>H</span>arsh.
            </h2>
          </div>
          <Navbar navdata={getnavdata} />
          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
            <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
          </div>
        </header>
        <div className="container">
          <div className="hero-content grid grid-two-columns">
            <div className="hero-data">
              <h3 className="hero-top-data">
                Hello everyone&nbsp;{" "}
                <i className="fa-solid fa-hands-clapping"></i>
              </h3>
              <h1 className="hero-heading">
                I`m <span>Harshvardhan</span> <span>Sharma</span> <br /> Senior
                Web Developer
              </h1>
              <h2>
                <span className="auto-type"></span>
              </h2>
              <h3 className="hero-top-data">
                A Passoniate Web Developer, Python Developer In India.
              </h3>
              <div>
                <a href="#contact" className="btn hero-btn">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src={hero_img} alt="hero_img" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="section section-about" id="about">
        <div className="container">
          <h2 className="common-heading about-heading">
            About Me&nbsp; <i className="fa-solid fa-user"></i>
          </h2>
          <p className="about-para">Let`s Know More about me.</p>
          <div className="about-content grid grid-two-columns">
            <div className="about-img">
              <img src={about_img} alt="about_img" />
            </div>
            <div className="about-data">
              <h2>
                My Bio Data&nbsp; <i className="fa-solid fa-user-tie"></i>
              </h2>
              <p>
                <i className="fa-solid fa-quote-left"></i>&nbsp; Hi, My name is
                Harshvardhan Sharma. I belongs to Dehradun,Uttarakhand,India
                where I have completed my schooling from Kendriya Vidyalaya
                Ordance Factory. After that I have completed my graduation in
                BTech CSE from Graphic Era Hill University Dehradun Campus.
                Talking about my skills, so I`m well known in HTML5, CSS3,
                Javascript, ReactJS, Electron, Python, Github, and JSX. In last,
                talking about my hobbies, so I love to play cricket and watching
                some mindblowing facts. &nbsp;
                <i className="fa-solid fa-quote-right"></i>
              </p>
              <div className="bio-data-stats">
                <div className="bio-stats">
                  <h3>Python</h3>
                  <div className="bio-progress-bar">
                    <span>75%</span>
                  </div>
                </div>
                <div className="bio-stats">
                  <h3>HTML</h3>
                  <div className="bio-progress-bar bio-progress-2">
                    <span>99%</span>
                  </div>
                </div>
                <div className="bio-stats">
                  <h3>CSS</h3>
                  <div className="bio-progress-bar bio-progress-3">
                    <span>90%</span>
                  </div>
                </div>
                <div className="bio-stats">
                  <h3>JavaScript</h3>
                  <div className="bio-progress-bar bio-progress-4">
                    <span>85%</span>
                  </div>
                </div>
                <div className="bio-stats">
                  <h3>React JS</h3>
                  <div className="bio-progress-bar bio-progress-5">
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="bio-data-button">
                <a
                  className="btn"
                  href="https://drive.google.com/file/d/1qSU09xEzqnu0irdvNWRXBi3s-gFBm8rT/view?usp=sharing"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}

      <Service getservicedata={getservicedata} />

      {/* Work Section */}

      <section className="section section-work">
        <div className="container grid grid-four-columns">
          <div>
            <h2 className="counter-numbers" data-number="500+">
              0+
            </h2>
            <p className="work-para">Project Stars</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="600+">
              0+
            </h2>
            <p className="work-para">Happy Clients</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="400+">
              0+
            </h2>
            <p className="work-para">Experience</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="3000+">
              0+
            </h2>
            <p className="work-para">Contribution</p>
          </div>
        </div>
      </section>

      {/* Project Section */}

      <Project getprojectdata={getprojectdata} />

      {/* Contact Section */}

      <section className="section section-contact" id="contact">
        <div className="container">
          <h2 className="common-heading contact-heading">
            Contact Me&nbsp; <i className="fa-solid fa-phone"></i>
          </h2>
          <p className="contact-para">Get Touch With Me !</p>
          <div className="contact-part grid grid-two-columns">
            <div className="contact-data">
              <div>
                <a href="#contact">
                  <i className="fa-solid fa-location-dot"></i>&nbsp; Dehradun,
                  Uttarakhand, India
                </a>
              </div>
              <div>
                <a href="mailto:3469harshsharma@gmail.com">
                  <i className="fa-solid fa-paper-plane"></i>&nbsp;
                  3469harshsharma@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+9149349278">
                  <i className="fa-solid fa-phone"></i>&nbsp; +91 9149349278
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/hvs1234" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/ha.rshsharma135/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/harshvardhan-sharma-a3685a236/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1qSU09xEzqnu0irdvNWRXBi3s-gFBm8rT/view?usp=sharing"
                  target="_blank"
                  className="btn contact-data-btn"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="section-contact-main">
              <form action="https://formspree.io/f/xdoqevwj" method="POST">
                <div>
                  <input
                    className="input-here"
                    id="name"
                    name="Name"
                    type="text"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    className="input-here"
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <textarea
                    className="input-here"
                    name="Message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Your Message"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <div>
                  <input
                    id="submit"
                    name="submit"
                    type="submit"
                    className="btn submit-btn"
                    value="Contact Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="f-credit">
        <h2>
          Copyright&nbsp; <i className="fa-solid fa-copyright"></i> Made By 💓
          Harsh. | All right reserved
        </h2>
      </div>
    </>
  );
};

export default Home;
