import { About } from './cmps/About'
import { Contact } from './cmps/Contact'
import { Experience } from './cmps/Experience'
import { Hero } from './cmps/Hero'
import { Projects } from './cmps/Projects'
import { PageFooter } from './cmps/layout/PageFooter'
import { PageHeader } from './cmps/layout/PageHeader'
import './assets/styles/main.scss'

export function App() {
  return (
    <main className="main-layout">
      <PageHeader />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <PageFooter />
    </main>
  )
}
