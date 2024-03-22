import profilePic from '../assets/img/profile-pic.jpg'
import cv from '../assets/Tal_Elias_CV.pdf'
import { iconTheme } from '../services/util.service'
import { motion } from 'framer-motion'

export function Hero() {
  const linkedinUrl = 'https://www.linkedin.com/in/talelias/'
  const githubUrl = 'https://github.com/gezerlavan'

  return (
    <section id="hero" className="hero">
      <div className="pic-container">
        <motion.div
          drag
          dragElastic={0.5}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className="draggable-div"
        ></motion.div>
        <img src={profilePic} alt="Profile picture" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Tal Elias</h1>
        <p className="section-text-p2">Full Stack Developer</p>
        <div className="btn-container">
          <a href={cv} target="_blank" className="btn btn-color-2">
            <span>Download CV</span>
          </a>
          <a href="#contact" className="btn btn-color-1">
            <span>Contact Info</span>
          </a>
        </div>
        <div className="socials-container flex justify-center">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={iconTheme('linkedin')}
              alt="Linkedin icon"
              className="icon"
            />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={iconTheme('github')} alt="Github icon" className="icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
