import profilePic from '../assets/img/profile-pic.jpg'
import resume from '../assets/Tal_Elias_Resume.pdf'
import useIconTheme from '../customHooks/useIconTheme'

export function Hero() {
  const linkedinUrl = 'https://www.linkedin.com/in/talelias/'
  const githubUrl = 'https://github.com/gezerlavan'
  const iconTheme = useIconTheme()

  return (
    <section className="hero">
      <div className="pic-container">
        <img src={profilePic} alt="Profile picture" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Tal Elias</h1>
        <p className="section-text-p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2">
            <a href={resume} target="_blank">
              Download CV
            </a>
          </button>
          <button className="btn btn-color-1">
            <a href="#contact">Contact Info</a>
          </button>
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
