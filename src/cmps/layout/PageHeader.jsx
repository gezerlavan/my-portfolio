import { HamburgerMenu } from './HamburgerMenu'
import { NavLinks } from './NavLinks'
import { ThemeSwitch } from './ThemeSwitch'

export function PageHeader() {
  return (
    <header className="page-header flex space-between align-center">
      <div className="logo animate__animated">Tal Elias</div>
      <NavLinks />
      <div className='flex auto-center' style={{gap: '1em'}}>
        <ThemeSwitch />
        <HamburgerMenu />
      </div>
    </header>
  )
}
