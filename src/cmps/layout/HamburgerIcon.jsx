import { useRef } from 'react'
import useClickOutside from '../../customHooks/useClickOutside'

export function HamburgerIcon({ isOpen, setIsOpen }) {
  const hamburgerIconRef = useRef(null)

  useClickOutside(hamburgerIconRef, () => setIsOpen(false))

  return (
    <div
      ref={hamburgerIconRef}
      className={`hamburger-icon flex column space-between ${
        isOpen ? 'open' : ''
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
