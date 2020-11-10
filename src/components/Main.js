import PropTypes from "prop-types";
import React from "react";
import Contact from "./Contact";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About Me</h2>
          <h3 className="major">Profile</h3>
          <p>
            I am an 19-year-old, third-year student at the University of Cape
            Town, studying a Bachelor of Science, majoring in Computer Science
            and Mathematical Statistics. I am passionate about my field, with a
            specific interest in Artificial Intelligence and Knowledge
            Representation, and applications of these focus areas to solve
            real-world intersectional issues. I matriculated at the age of 15,
            and have continually pushed boundaries and defied expectations. I am
            a highly creative, driven and determined individual, that strives
            for holistic excellence in all aspects of my life.
          </p>
          <p>
            I relish problem-solving and I persevere despite any odds. I thrive
            in challenging and pressurized environments and am a sociable,
            engaging and synergetic individual. I have been found to be
            well-mannered, humble, and respectful by my superiors and peers.
            Having travelled extensively throughout my life, especially during
            my gap year, I believe these cultural experiences have enriched my
            cognition and broadened my outlook. I am persistent in my quest to
            acquire new knowledge and skills and consistently improve myself.
          </p>
          <h3 className="major">Education</h3>
          <h4>Bachelor of Science - University of Cape Town</h4>
          <ul>
            <li>Computer Science, Mathematical Statistics</li>
            <li>86.22%</li>
          </ul>
          <h4>Certificate - University of Cape Town/GetSmarter</h4>
          <ul>
            <li>Fundamentals of Cybersecurity</li>
            <li>91.00%</li>
          </ul>
          <h4>National Senior Certificate - Eden College Durban</h4>
          <ul>
            <li>94.60%</li>
          </ul>
          {close}
        </article>
        <article
          id="experience"
          className={`${this.props.article === "experience" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Experience</h2>

          <h3 className="major">University of Cape Town</h3>
          <h4>Computer Science 2B Tutor | Aug 2020 - December 2020</h4>
          <p>
            Appointed as a tutor for second-year Computer Science courses in the
            Science Faculty.
          </p>
          <p>
            Responsibilities include marking tests and assignments and providing
            assistance to students where required.
          </p>
          <h3 className="major">Nomanini</h3>
          <h4>Software Developer Intern | July 2020</h4>
          <p>
            Developed a Python package to extract and process data that measures
            merchant health, to generate a set of credit scores and loan offers
            using a heuristic model.
          </p>
          <p>
            Conducted data analysis on the extracted features using several
            machine learning techniques, including clustering and neural
            networks, with Keras.
          </p>
          <h3 className="major">University of Cape Town</h3>
          <h4>Computer Science 2A Tutor | Aug 2020 - December 2020</h4>
          <p>
            Appointed as a tutor for second-year Computer Science courses in the
            Science Faculty.
          </p>
          <p>
            Responsibilities include marking tests and assignments and providing
            assistance to students where required.
          </p>
          <h3 className="major">Amazon Web Services</h3>
          <h4>Software Development Engineer Intern | Nov 2019 - Feb 2020</h4>
          <p>
            Reduced operational load for the Managed Deployments team by
            developing and implemented an information linking and tracking
            system. TypeScript and React JS was used for the solution front-end,
            a Golang RESTful API server backend, and a DynamoDB repository for
            persistence.
          </p>
          <p>
            Discovered key insights concerning deployments, and drafted a
            roadmap for future work by conducting an investigation into using
            Machine Learning for deployment failure predictive analytics,
            utilising Logistic Regression, ANNs and Bayesian Networks in Python.
          </p>
          <h3 className="major">Electrum Payments</h3>
          <h4>Software Developer Intern | June 2019 - July 2020</h4>
          <p>
            Developed a MVP for a new API Documentation website for Electrum's
            open-source services, built with Gatsby, a React-based framework.{" "}
          </p>
          <p>
            Configured Docker files and continuous integration and deployment
            with CircleCI.
          </p>
          <h3 className="major">UKZN Quantum Research Unit</h3>
          <h4>Intern | Nov 2019 - Feb 2020</h4>
          <p>
            Received tutelage in research methodologies and elementary quantum
            mechanics at a Quantum Machine Learning workshop with international
            experts.
          </p>

          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === "skills" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Skills and Research</h2>
          <h3>Programming Languages</h3>
          <p>
            <h5>Experienced</h5>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
            </ul>
            <h5>Proficient</h5>
            <ul>
              <li>Golang</li>
              <li>R</li>
              <li>Matlab</li>
              <li>TypeScript</li>
            </ul>
          </p>
          <h3>Research</h3>
          <p>
            <ol>
              <li>
                Investigating the Generation of Consumer Energy Consumption
                Patterns in South Africa using Density-based Clustering
              </li>
            </ol>
          </p>

          {close}
        </article>

        <article
          id="awards"
          className={`${this.props.article === "awards" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Awards</h2>
          <ul>
            <li>Computer Science BSG Prize(2020)</li>
            <li>Investec IT Scholarship (2020)</li>
            <li>UCT Science Faculty Dean's List (2018, 2019)</li>
            <li>UCT Science Faculty Merit Scholarship (2019, 2020)</li>
            <li>UCT Science Faculty Entrance Scholarship (2018)</li>
            <li>Golden Key Honour Society Chapter Award (2019)</li>
            <li>Golden Key Honour Society Membership (2019)</li>
            <li>CSC2002S Certificate of Merit (2019)</li>
            <li>CSC2001F Certificate of Merit (2019)</li>
            <li>CSC1016S Class Medal (2018)</li>
            <li>CSC1016S Certificate of Merit (2018)</li>
            <li>CSC1015F Certificate of Merit (2018)</li>
            <li>Physics SA Colours (2017)</li>
            <li>Top 3 in Province (2016)</li>
            <li>Dux Proxime Accessit (2016)</li>
            <li>Academic Honours (2016)</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <Contact />
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/kialan-p-a63779140/"
                className="icon fa-linkedin-square"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/kialanpillay"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kialanpillay"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
