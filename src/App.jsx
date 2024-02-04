import { About } from './cmps/About'
import { Experience } from './cmps/Experience'
import { Hero } from './cmps/Hero'
import { PageHeader } from './cmps/layout/PageHeader'

export function App() {
  return (
    <main className="main-layout">
      <PageHeader />
      <Hero />
      <About />
      <Experience />
    </main>
  )
}
