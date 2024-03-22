import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMantineColorScheme } from '@mantine/core'
import sunIcon from '../../assets/img/sun.svg'
import moonIcon from '../../assets/img/moon.svg'

export function ThemeSwitch() {
  const [isOn, setIsOn] = useState(false)
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useMantineColorScheme({ keepTransitions: true })
    
  const darkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  useEffect(() => {
    if (colorScheme === 'auto') {
      darkModePreferred
        ? (setIsOn(true), setColorScheme('dark'))
        : (setIsOn(false), setColorScheme('light'))
    } else {
      colorScheme === 'dark' ? setIsOn(true) : setIsOn(false)
    }
  }, [])

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  const toggleSwitch = () => {
    setIsOn(!isOn)
    toggleColorScheme()
  }

  return (
    <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div
        className={`handle flex auto-center ${isOn ? 'sun' : 'moon'}`}
        layout
        transition={spring}
        whileHover={{ scale: 1.08 }}
      >
        {!!isOn ? (
          <div style={{ width: '20px', height: '20px' }}>
            <img src={sunIcon} alt="Sun icon" />
          </div>
        ) : (
          <div style={{ width: '20px', height: '20px' }}>
            <img src={moonIcon} alt="Moon icon" />
          </div>
        )}
      </motion.div>
    </div>
  )
}
