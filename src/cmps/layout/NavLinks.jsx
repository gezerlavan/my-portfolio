import { useMantineColorScheme } from '@mantine/core'

export function NavLinks({ isOpen, footer }) {
  const navLinks = ['About', 'Experience', 'Projects', 'Contact']
  const { colorScheme } = useMantineColorScheme()

  return (
    <nav className="nav-links">
      <ul
        className={`${isOpen ? 'open ' : ''}${
          footer ? 'footer ' : ''
        }${colorScheme}`}
      >
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
