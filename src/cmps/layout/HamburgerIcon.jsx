export function HamburgerIcon({ isOpen, setIsOpen }) {
  return (
    <div
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
