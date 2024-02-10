import { useRef } from 'react'
import useOnScreen from '../customHooks/useOnScreen'
import { ArrowIcon } from './layout/ArrowIcon'
import { iconTheme } from '../services/util.service'

export function Experience() {
  const experienceSectionRef = useRef(null)
  const isExperienceSectionVisible = useOnScreen(experienceSectionRef)

  const experienceSkills = [
    {
      title: 'Frontend Development',
      skills: [
        { title: 'HTML', level: 'intermediate' },
        { title: 'CSS', level: 'intermediate' },
        { title: 'JavaScript', level: 'intermediate' },
        { title: 'TypeScript', level: 'basic' },
        { title: 'React', level: 'intermediate' },
        { title: 'SASS', level: 'intermediate' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { title: 'Node JS', level: 'intermediate' },
        { title: 'Express', level: 'intermediate' },
        { title: 'MongoDB', level: 'intermediate' },
        { title: 'RESTful API', level: 'intermediate' },
        { title: 'MySQL', level: 'basic' },
      ],
    },
  ]

  return (
    <section ref={experienceSectionRef} id="experience" className="experience">
      <p className="section-text-p1">Explore my</p>
      <h1 className="title">Experience</h1>
      <div className="experience-containers flex">
        {experienceSkills.map((skillSet, idx) => (
          <div className="experience-container" key={idx}>
            <h2 className="experience-sub-title">{skillSet.title}</h2>
            <div className="experience-article-container flex space-around">
              {skillSet.skills.map((skill, idx) => (
                <article
                  className="experience-article flex space-around"
                  key={idx}
                >
                  <img
                    src={iconTheme('checkmark')}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ArrowIcon redirect={'#projects'} />
    </section>
  )
}
