import useIconTheme from '../../customHooks/useIconTheme'

export function ArrowIcon({ redirect }) {
  const iconTheme = useIconTheme()

  return (
    <img
      src={iconTheme('arrow')}
      alt="Arrow icon"
      className="arrow icon"
      onClick={() => {
        window.location.href = redirect
      }}
    />
  )
}
