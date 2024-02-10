import { HamburgerIcon } from './HamburgerIcon'
import { NavLinks } from './NavLinks'
import { useDisclosure } from '@mantine/hooks'

export function HamburgerMenu() {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <div className="hamburger-menu">
      <div className="container">
        <HamburgerIcon opened={opened} toggle={toggle} close={close} />
        <NavLinks opened={opened} />
      </div>
    </div>
  )
}
