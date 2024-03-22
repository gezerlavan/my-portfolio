import { ArrowIcon } from './layout/ArrowIcon'
import projectOneImg from '../assets/img/project-1.png'
import projectTwoImg from '../assets/img/project-2.png'
import projectThreeImg from '../assets/img/project-3.png'

export function Projects() {
  const projectsArticles = [
    {
      title: 'HairBNB',
      imgUrl: projectOneImg,
      githubUrl: 'https://github.com/gezerlavan/sprint4-hairbnb-frontend',
      demoUrl: 'https://hairbnb.onrender.com/',
    },
    {
      title: 'Mister-Toy',
      imgUrl: projectTwoImg,
      githubUrl: 'https://github.com/gezerlavan/mister-toy-frontend',
      demoUrl: 'https://mister-toy-qgly.onrender.com/',
    },
    {
      title: 'Meme-Generator',
      imgUrl: projectThreeImg,
      githubUrl: 'https://github.com/gezerlavan/meme-generator',
      demoUrl: 'https://gezerlavan.github.io/meme-generator/',
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
              <a
                href={article.githubUrl}
                target="_blank"
                className="btn btn-color-2"
              >
                <span>Github</span>
              </a>
              <a
                href={article.demoUrl}
                target="_blank"
                className="btn btn-color-2"
              >
                <span>Live demo</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <ArrowIcon redirect={'#contact'} />
    </section>
  )
}
