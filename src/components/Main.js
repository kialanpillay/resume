import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          
          <p>
          I am an 18-year-old, second-year student at the University of Cape Town, studying a Bachelor of Science, 
          triple majoring in Computer Science, Mathematical Statistics, and Mathematics. 
          I am passionate about all things related to Computer Science and IT, with a specific interest in 
          Artificial Intelligence and Knowledge Representation, and applications of these focus areas to solve 
          real-world intersectional issues.
          I matriculated at the age of 15, and have continually pushed boundaries and defied expectations. 
          I am a highly creative, driven and determined individual, that strives for holistic excellence in all aspects of my life.
          
          </p>
          <p>
          I relish problem-solving and I persevere despite any odds. 
          I thrive in challenging and pressurized environments and am asociable, engaging andsynergetic
          individual. I have been found to be well-mannered, humble, and respectful by my superiors and peers. 
          Having travelled extensively throughout my life, especially during my gap year, 
          I believe these cultural experiences have enriched my cognition and broadened my outlook. 
          I am persistent in my quest to acquire new knowledge and skills and consistently improve myself.
          </p>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          
          
         
          <h3 className="major">Amazon Web Services</h3>
          <h4>Software Developer Intern | Nov 2019 - Feb 2020</h4>
          <p>
              Managed Deployments team.
          </p>

          <h3 className="major">Electrum Payments</h3>
          <h4>Software Developer Intern | June 2019 - July 2020</h4>
          <p>
              Developed a MVP for a new API documentation website for Electrum's open-source services, 
              built with Gatsby, a React-based framework. Configured Docker files and continuous 
              integration and deployment with CircleCI.
          </p>


          <h3 className="major">UCT Kopano Residence</h3>
          <h4>Head Student | Sep 2018 - Oct 2019</h4>
          <p>Administered a fully functional residence,
            fufilling the necessities of residents and creating an academically conducive environment. 
          </p>

          <h3 className="major">UCT Residence Council</h3>
          <h4>Software Developer Intern | Feb 2019 - Oct 2020</h4>
          <p>Managed funds allocated to the council, and involved in executive-level decision making. 
          </p>

          <h3 className="major">UCT Kopano Residence</h3>
          <h4>Sub-committee Member | Sep 2018 - Oct 2019</h4>
          <p>Audited financial statements and created expenditure reports. 
          </p>


          <h3 className="major">UCT Science Faculty</h3>
          <h4>Class Representative | Feb 2018 - Nov 2018</h4>
          <p>Communicated queries and requests from students to teaching staff</p>


          <h3 className="major">UKZN Dept. of Physics Quantum Research Unit</h3>
          <h4>Intern | Nov 2019 - Feb 2020</h4>
          <p>Received tutoring in elemenatry quantum mechanics.
          Observed how research is conducted and learnt research methodologies.
          </p>
         

          
          
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills and Projects</h2>
          <h3>Programming Languages</h3>
          <p>
            <h5>Experienced</h5>
            <ul>
            <li>Java</li>
            <li>Python</li>
            </ul>
            <h5>Proficient</h5>
            <ul>
            <li>Matlab</li>
            <li>SQL</li>
            <li>R</li>
            <li>Javascript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
            <h5>Elementary</h5> 
            <ul>
            <li>XML</li>
            <li>Go</li>
            </ul>
          </p>
          <h3>Projects</h3>
          <p>
            <ol>
            <li>Investigating the Generation of Consumer Energy Consumption Patterns in South Africa
            using Density-based Clustering</li>
            </ol>
            
          </p>

          {close}
        </article>

        <article
          id="awards"
          className={`${this.props.article === 'awards' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Awards</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
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
              <a href="https://instagram.com/kialanpillay" className="icon fa-instagram">
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
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
