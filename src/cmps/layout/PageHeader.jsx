import { HamburgerMenu } from './HamburgerMenu'
import { NavLinks } from './NavLinks'

export function PageHeader() {
  return (
    <header className="page-header full flex space-around align-center">
      <div className="logo animate__animated">Tal Elias</div>
      <NavLinks />
      <HamburgerMenu />
    </header>
  )
}
