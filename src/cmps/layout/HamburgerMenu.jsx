import { useState } from 'react'
import { HamburgerIcon } from './HamburgerIcon'
import { NavLinks } from './NavLinks'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="hamburger-menu">
      <div className="container">
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavLinks isOpen={isOpen} />
      </div>
    </div>
  )
}
