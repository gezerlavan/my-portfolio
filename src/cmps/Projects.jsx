import { ArrowIcon } from './layout/ArrowIcon'
import projectOneImg from '../assets/img/project-1.png'
import projectTwoImg from '../assets/img/project-2.png'
import projectThreeImg from '../assets/img/project-3.png'

export function Projects() {
  const projectsArticles = [
    {
      title: 'Project One',
      imgUrl: projectOneImg,
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Project Two',
      imgUrl: projectTwoImg,
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Project Three',
      imgUrl: projectThreeImg,
      githubUrl: '#',
      demoUrl: '#',
    },
  ]
  return (
    <section id="projects" className="projects">
      <p className="section-text-p1">Browse my recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-article-container flex">
        {projectsArticles.map((article, idx) => (
          <article className="article-container" key={idx}>
            <div className="img-contianer flex justify-center">
              <img src={article.imgUrl} alt={article.title} />
            </div>
            <h2 className="project-title">{article.title}</h2>
            <div className="btn-container">
              <button className="btn btn-color-2">
                <a href="#">Github</a>
              </button>
              <button className="btn btn-color-2">
                <a href="#">Live demo</a>
              </button>
            </div>
          </article>
        ))}
      </div>
      <ArrowIcon redirect={'#contact'} />
    </section>
  )
}
