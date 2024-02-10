import { useRef } from 'react'
import { Burger } from '@mantine/core'
import useClickOutside from '../../customHooks/useClickOutside'

export function HamburgerIcon({ opened, toggle, close }) {
  const hamburgerIconRef = useRef(null)

  useClickOutside(hamburgerIconRef, () => close())

  return (
    <Burger
      ref={hamburgerIconRef}
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
      transitionDuration={200}
    />
  )
}
