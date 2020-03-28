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
          <h3 className="major">Profile</h3>
          <p>
          I am an 19-year-old, third-year student at the University of Cape Town, studying a Bachelor of Science, 
          majoring in Computer Science and Mathematical Statistics. 
          I am passionate about my field, with a specific interest in 
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
          <h3 className="major">Education</h3>
          <h4>  
          Bachelor of Science - University of Cape Town        
          </h4>
          <ul>
            <li>Computer Science, Mathematical Statistics</li>
            <li>84.42%</li>
          </ul>
          <h4>  
          Certificate - University of Cape Town/GetSmarter        
          </h4>
          <ul>
            <li>Cybersecurity</li>
            <li>91.00%</li>
          </ul>
          <h4>  
          National Senior Certificate - Eden College Durban        
          </h4>
          <ul>
            <li>94.60%</li>
          </ul>
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          
         
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
              <p>Reduced operational load for the Managed Deployments team by developing and implemented an information linking and tracking system. Typescript and React was used for the solution front-end, a Golang RESTful API server backend, and a DynamoDB repository for persistence.</p>
              <p>Discovered key insights concerning deployments, and drafted a roadmap for future work by conducting an investigation into using Machine Learning for deployment failure predictive analytics, utilising Logistic Regression, ANNs and Bayesian Networks in Python.</p>
          

          <h3 className="major">UCT Kopano Residence</h3>
          <h4>Head Mentor | Sep 2018 - Oct 2019</h4>
          <p>Manage a team of residence mentors,
            tasked with looking after the wellbeing of students, and offering support and guidance. 
          </p>

          <h3 className="major">Electrum Payments</h3>
          <h4>Software Developer Intern | June 2019 - July 2020</h4>
          <p>
          Developed a MVP for a new API Documentation website for Electrum's open-source services, built with Gatsby, a React-based framework. </p>
           <p>Configured Docker files and continuous 
              integration and deployment with CircleCI.</p>   
          


          <h3 className="major">UCT Kopano Residence</h3>
          <h4>Head Student | Sep 2018 - Oct 2019</h4>
          <p>Administered a fully functional residence,
            fufilling the necessities of residents and creating an academically conducive environment. 
          </p>

          <h3 className="major">UCT Residence Council</h3>
          <h4>Treasurer | Feb 2019 - Oct 2020</h4>
          <p>Managed funds allocated to the council, and involved in executive-level decision making. 
          </p>

          <h3 className="major">UKZN Dept. of Physics Quantum Research Unit</h3>
          <h4>Intern | Nov 2019 - Feb 2020</h4>
          <p>Received tutelage in research methodologies and elementary quantum mechanics at a Quantum Machine Learning workshop with international experts.
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
            <li>ReactJS</li>
            <li>Javascript</li>
            </ul>
            <h5>Proficient</h5>
            <ul>
            <li>Golang</li>
            <li>SQL</li>
            <li>R</li>
            <li>Matlab</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
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
          <ul>
            <li>UCT Science Faculty Dean's List (2018, 2019)</li>
            <li>UCT Science Faculty Merit Scholarship (2019, 2020)</li>
            <li>UCT Science Faculty Entrance Scholarship (2018)</li>
            <li>Golden Key Honour Soceity Chapter Award (2019)</li>
            <li>Golden Key Honour Soceity Membership (2019)</li>
            <li>CSC2002S Certificate of Merit (2019)</li>
            <li>CSC2001F Certificate of Merit (2019)</li>
            <li>CSC1016S Class Medal (2018)</li>
            <li>CSC1016S Certificate of Merit (2018)</li>
            <li>CSC1015F Certificate of Merit (2018)</li>
            <li>Physics SA Colours (2017)</li>
            <li>Top 5 in KZN Province (2016)</li>
            <li>Dux Proxime Accessit (2016)</li>
            <li>Academic Honours (2016)</li>
            </ul>
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
