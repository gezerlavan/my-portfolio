import { useRef } from 'react'
import profilePic from '../assets/img/profile-pic1.png'
import certificate from '../assets/full_stack_certificate.jpg'
import useClickOutside from '../customHooks/useClickOutside'
import { ArrowIcon } from './layout/ArrowIcon'
import { useMantineColorScheme } from '@mantine/core'
import { iconTheme } from '../services/util.service'

export function About() {
  const dialogRef = useRef(null)
  const dialogContainer = useRef(null)
  const { colorScheme } = useMantineColorScheme()

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
      <div className="about-container">
        <div className="pic-container">
          <img src={profilePic} alt="Profile picture" />
        </div>
        <div className="about-details-container flex column justify-center">
          <div className="about-containers flex">
            <div className="details-container">
              <img
                src={iconTheme('experience')}
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
                src={iconTheme('education')}
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
              Welcome to my digital realm! I'm Tal—a lifelong puzzle enthusiast
              who's found a new passion in full stack development. With every
              line of code, I embark on a thrilling adventure, piecing together
              solutions and unraveling complexities. Join me as we navigate this
              exciting journey together, exploring the endless possibilities of
              the digital landscape, one line at a time! 💻✨
            </p>
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={colorScheme && colorScheme === 'dark' ? 'dark' : ''}
      >
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
