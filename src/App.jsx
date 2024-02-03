import { Hero } from './cmps/Hero'
import { PageHeader } from './cmps/layout/PageHeader'

export function App() {
  return (
    <main className="main-layout">
      <PageHeader />
      <Hero />
    </main>
  )
}
