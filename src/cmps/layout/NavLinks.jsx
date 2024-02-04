export function NavLinks({ isOpen, footer }) {
  const navLinks = ['About', 'Experience', 'Projects', 'Contact']

  return (
    <nav className="nav-links">
      <ul className={`${isOpen ? 'open ' : ''}${footer ? 'footer' : ''}`}>
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
