import { useMantineColorScheme } from '@mantine/core'

function getAssetSrc(name) {
  const path = `../assets/img/${name}`
  const modules = import.meta.glob('../assets/img/*', { eager: true })
  const mod = modules[path]
  return mod.default
}

export function iconTheme(name) {
  const { colorScheme } = useMantineColorScheme()
  return colorScheme === 'dark'
    ? getAssetSrc(name + '-inverted.png')
    : getAssetSrc(name + '.png')
}
