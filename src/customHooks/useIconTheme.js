import { useMantineColorScheme } from '@mantine/core'

export default function useIconTheme() {
  const { colorScheme } = useMantineColorScheme()

  function getAssetSrc(name) {
    const path = `../assets/img/${name}`
    const modules = import.meta.glob('../assets/img/*', { eager: true })
    const mod = modules[path]
    return mod.default
  }

  function iconTheme(name) {
    return colorScheme === 'dark'
      ? getAssetSrc(name + '-inverted.png')
      : getAssetSrc(name + '.png')
  }

  return iconTheme
}
