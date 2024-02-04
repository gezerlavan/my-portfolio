import { useRef } from 'react'
import profilePic from '../assets/img/profile-pic.jpg'
import experienceIcon from '../assets/img/experience.png'
import certificate from '../assets/full_stack_certificate.jpg'
import useClickOutside from '../customHooks/useClickOutside'
import { ArrowIcon } from './layout/ArrowIcon'

export function About() {
  const dialogRef = useRef(null)
  const dialogContainer = useRef(null)

  function toggleDialog() {
    if (!dialogRef.current) return
    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  useClickOutside(dialogContainer, () => {
    if (dialogRef.current && dialogRef.current.hasAttribute('open'))
      dialogRef.current.close()
  })

  return (
    <section id="about" className="about">
      <p className="section-text-p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div className="about-container flex">
        <div className="pic-container">
          <img src={profilePic} alt="Profile picture" />
        </div>
        <div className="about-details-container flex column justify-center">
          <div className="about-containers flex">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon default"
              />
              <h3>Experience</h3>
              <p>
                Entry-level enthusiast, <br /> eager to learn! <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon default"
              />
              <h3>Education</h3>
              <p>
                Full Stack -<br /> Bootcamp{' '}
                <span
                  className="certificate"
                  onClick={(e) => {
                    toggleDialog()
                    e.stopPropagation()
                  }}
                >
                  certificate
                </span>{' '}
                <br />
                &#x40;Coding Academy
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              omnis cumque officiis totam. Cumque amet at iure excepturi eaque
              eum. Labore cumque, neque blanditiis pariatur dolore, ab aperiam
              illo sequi amet magnam error? Quasi officiis laborum libero ut cum
              natus, at deleniti amet facere quidem aut, sequi, laudantium
              recusandae sint.
            </p>
          </div>
        </div>
      </div>
      <dialog ref={dialogRef}>
        <div
          ref={dialogContainer}
          className="dialog-container flex column align-center"
        >
          <div>
            <img src={certificate} alt="Certificate" />
          </div>
          <button className="btn btn-color-2" onClick={toggleDialog}>
            Close
          </button>
        </div>
      </dialog>
      <ArrowIcon redirect={'#experience'} />
    </section>
  )
}
