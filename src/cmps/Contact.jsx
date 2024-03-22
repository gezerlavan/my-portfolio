import { iconTheme } from '../services/util.service'

export function Contact() {
  return (
    <section id="contact" className="contact flex column justify-center">
      <p className="section-text-p1">Get in touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container flex justify-center">
        <div className="contact-info-container flex auto-center">
          <img
            src={iconTheme('email')}
            alt="Email icon"
            className="icon email"
          />
          <p>
            <a href="mailto:dev.talelias@gmail.com">dev.talelias@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container flex auto-center">
          <img
            src={iconTheme('linkedin')}
            alt="Linkedin icon"
            className="icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/talelias" target="_blank">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
