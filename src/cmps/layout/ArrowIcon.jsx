import { iconTheme } from '../../services/util.service'

export function ArrowIcon({ redirect }) {
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
