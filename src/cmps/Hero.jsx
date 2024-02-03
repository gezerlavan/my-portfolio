import profilePic from '../assets/img/profile-pic.jpg'
import linkedinIcon from '../assets/img/linkedin.png'
import githubIcon from '../assets/img/github.png'
import resume from '../assets/Tal_Elias_Resume.pdf'

export function Hero() {
  function handleRedirect(link) {
    if (!link) return
    const linkedinUrl = 'https://www.linkedin.com/in/talelias/'
    const githubUrl = 'https://github.com/gezerlavan'
    if (link === 'linkedin') window.open(linkedinUrl, '_blank')
    if (link === 'github') window.open(githubUrl, '_blank')
  }

  function onDownloadCV() {
    window.open(resume, '_blank')
  }

  return (
    <section className="hero flex">
      <div className="pic-container">
        <img src={profilePic} alt="Profile picture" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">Tal Elias</h1>
        <p className="section-text-p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={onDownloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-1">Contact Info</button>
        </div>
        <div className="socials-container flex justify-center">
          <img
            src={linkedinIcon}
            alt="Linkedin icon"
            className="icon"
            onClick={() => handleRedirect('linkedin')}
          />
          <img
            src={githubIcon}
            alt="Github icon"
            className="icon"
            onClick={() => handleRedirect('github')}
          />
        </div>
      </div>
    </section>
  )
}
